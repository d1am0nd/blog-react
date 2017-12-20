package server

import (
	"encoding/json"
	"net/http"

	"blog3.0/go/config"
	"blog3.0/go/database"

	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
)

/**
 * 1. Grabs user by param's email from db
 * 2. Compares Hases
 * 3. Returns user json (todo: jwt)
 */
func Login(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	email := r.FormValue("email")
	pass := r.FormValue("password")

	user, err := database.FindUserByEmail(email)
	if err != nil {
		http.Error(w, "Authorization failed", http.StatusUnauthorized)
		return
	}

	err = compareHashAndPassword(pass, user.Password)
	if err != nil {
		http.Error(w, "Authorization failed", http.StatusUnauthorized)
		return
	}

	var rjson []byte
	rjson, err = json.Marshal(user)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	claims := NewClaims(user.Id, config.Jwt)
	token := CreateToken(claims, config.Jwt)

	w.Header().Set("Access-Control-Expose-Headers", "Authorization")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Authorization", token)
	w.Header().Set("Content-Type", "application/json")
	w.Write(rjson)
}

func CurrentUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var userId = r.Context().Value("claims").(Claims).UserId
	user, err := database.FindUserById(userId)
	if err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	var rjson []byte
	rjson, err = json.Marshal(user)
	if err != nil {
		http.Error(w, "Problem jsonifying", http.StatusBadRequest)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(rjson)
}

func compareHashAndPassword(password string, hash string) error {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err
}
