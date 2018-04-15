package server

import (
	"encoding/json"
	"net/http"
	"strconv"

	"blog3.0/go/database"

	"github.com/julienschmidt/httprouter"
)

func PostBySlug(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var claims = r.Context().Value("claims")
	slug := p.ByName("slug")

	var err error
	var post database.Post

	if claims != nil {
		var userId = claims.(Claims).UserId
		post, err = database.FindMyPostBySlug(userId, slug)
	} else {
		post, err = database.FindActivePostBySlug(slug)
	}
	if err != nil {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}
	json, err := json.Marshal(post)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func ActivePosts(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	posts, err := database.GetActivePosts()
	if err != nil {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}
	json, err := json.Marshal(posts)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func MyPosts(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var userId = r.Context().Value("claims").(Claims).UserId
	posts, err := database.GetUsersPosts(userId)
	if err != nil {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}
	json, err := json.Marshal(posts)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func CreatePost(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var userId = r.Context().Value("claims").(Claims).UserId
	post := database.NewPost()

	fillPost(r, &post)

	err := database.CreatePost(&post, userId)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("{success:true}"))
}

func UpdatePost(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var userId = r.Context().Value("claims").(Claims).UserId

	i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}
	id := uint32(i64)

	// Find existing post or 404
	post, err := database.FindOnlyMyPostById(userId, id)
	if err != nil {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}

	// Setting values
	fillPost(r, &post)

	err = database.UpdatePostById(&post, userId, post.Id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	json, err := json.Marshal(post)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func DeletePost(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var userId = r.Context().Value("claims").(Claims).UserId

	i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
	if err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}
	id := uint32(i64)

	// Find existing post or 404
	err = database.DeletePostById(id, userId)
	if err != nil {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte("{success:true}"))
}

func fillPost(r *http.Request, post *database.Post) {
	// Setting values
    decoder := json.NewDecoder(r.Body)
    defer r.Body.Close()

    decoder.Decode(&post)
}
