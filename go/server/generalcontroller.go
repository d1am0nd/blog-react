package server

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func Home(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	http.ServeFile(w, r, "../public/index2.html")
}

func AboutJson(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    w.Header().Set("Content-Type", "application/json")
	http.ServeFile(w, r, "../config/about.json")
}

func serveFile(path string) httprouter.Handle {
	return func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		http.ServeFile(w, r, path)
	}
}
