package server

import (
	"encoding/json"
	"net/http"

	"blog3.0/go/config"
	"blog3.0/go/database"

	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
)

type credentialsReq struct {
	Email    string
	Password string
}

func LoginHeaders(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	w.Header().Set("Access-Control-Allow-Credentials", "true")
}

/**
 * 1. Grabs user by param's email from db
 * 2. Compares Hashes
 * 3. Returns user json
 */
func Login(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	var creds credentialsReq
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&creds)

	user, err := database.FindUserByEmail(creds.Email)
	if err != nil {
		http.Error(w, "Authorization failed", http.StatusUnauthorized)
		return
	}

	err = compareHashAndPassword(creds.Password, user.Password)
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

	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Access-Control-Expose-Headers", "Authorization")
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
