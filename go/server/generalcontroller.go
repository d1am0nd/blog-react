package server

import (
    "net/http"

    "github.com/julienschmidt/httprouter"
)

func Home(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    http.ServeFile(w, r, "../public/index.html")
}

func serveFile(path string) httprouter.Handle {
    return func (w http.ResponseWriter, r *http.Request, p httprouter.Params) {
        http.ServeFile(w, r, path)
    }
}
