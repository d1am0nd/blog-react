package server

import (
    "fmt"
    "net/http"

    "blog2.0/go/config"

    "github.com/julienschmidt/httprouter"
)

func Home(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    if config.Env.IsProd() {
        http.ServeFile(w, r, "../public/index.html")
    } else {
        fmt.Println("NoT production")
        http.ServeFile(w, r, "../public/index2.html")
    }
}
