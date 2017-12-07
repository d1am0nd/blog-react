package main

import (
    "fmt"
    "net/http"

    "blog3.0/go/server"
    "blog3.0/go/config"
    "blog3.0/go/database"

    "github.com/julienschmidt/httprouter"
)

func main() {
    fmt.Println("Hello world!")

    config.Init()

    router := server.NewRouter()
    server := Server{r: router}

    database.Connect(config.Mysql.DSN())

    fmt.Println("Serving on port " + config.Env.Port)

    fmt.Println("ENV: " + config.Env.Env)
    if config.Env.IsProd() {
        fmt.Println("PRODUCTION")
    } else {
        fmt.Println("Not production")
    }

    http.ListenAndServe(config.Env.Port, &server)
}

/* Server stuff */
type Server struct {
    r *httprouter.Router
}

// Global setting of headers
func (s *Server) ServeHTTP (w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*") // http://localhost:8080
    w.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
    w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
    s.r.ServeHTTP(w, r)
}
