package server

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"strconv"

	"blog3.0/go/database"

	"github.com/julienschmidt/httprouter"
)

func ImageById(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}
	id := uint32(i64)

	image, err := database.FindImageById(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}
	rjson, err := json.Marshal(image)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(rjson)
}

func AllImages(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	images, err := database.GetAllImages()
	if err != nil {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}
	rjson, err := json.Marshal(images)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(rjson)
}

func CreateImage(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	imgName, err := saveFileToDir(r, "image")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var userId = r.Context().Value("claims").(Claims).UserId
	img := database.NewImage()
	img.Path = imgName
	fillImage(r, &img)

	err = database.CreateImage(&img, userId)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(imgName))
}

func UpdateImage(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	userId := r.Context().Value("claims").(Claims).UserId

	i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}
	id := uint32(i64)

	img, err := database.FindUsersImageById(userId, id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	_, _, err = r.FormFile("image")
	if err == nil {
		DeleteIfExists("./../public/uploads/" + img.Path)
		imgName, err := saveFileToDir(r, "image")
		if err == nil {
			img.Path = imgName
		}
	}
	err = nil

	fillImage(r, &img)

	err = database.UpdateImageById(&img, userId, img.Id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	json, err := json.Marshal(img)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func DeleteImage(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	userId := r.Context().Value("claims").(Claims).UserId

	i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}
	id := uint32(i64)

	img, err := database.FindUsersImageById(userId, id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusNotFound)
		return
	}

	DeleteIfExists("./../public/uploads/" + img.Path)
	database.DeleteUsersImageById(userId, id)

	w.Write([]byte("yeah"))
}

/**
 * Takes r *request and key string, where key is the name of the form field (of image)
 */
func saveFileToDir(r *http.Request, key string) (string, error) {
	r.ParseMultipartForm(32 << 20)
	image, handler, err := r.FormFile(key)
	defer image.Close()
	if err != nil {
		return "", err
	}

	// Prepand number if file already exists
	i := 0
	fname := handler.Filename
	dest := "./public/uploads/"

	for FileExists(dest + fname) {
		i = i + 1
		fname = strconv.Itoa(i) + handler.Filename
	}

	f, err := os.OpenFile(dest+fname, os.O_WRONLY|os.O_CREATE, 0666)
	defer f.Close()
	if err != nil {
		return "", err
	}
	io.Copy(f, image)
	return fname, err
}

/**
 * Fills image (from requeest) to save to db
 */
func fillImage(r *http.Request, image *database.Image) {
	image.Name = r.FormValue("name")
}
