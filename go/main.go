package main

import (
    "fmt"
    "net/http"

    "blog2.0/go/server"
    "blog2.0/go/config"
    "blog2.0/go/database"
)

func main() {
    fmt.Println("Hello world!")

    config.Init()

    router := server.NewRouter()

    database.Connect(config.Mysql.DSN())

    fmt.Println("Serving on port " + config.Env.Port)

    fmt.Println("ENV: " + config.Env.Env)
    if config.Env.IsProd() {
        fmt.Println("PRODUCTION")
    } else {
        fmt.Println("Not production")
    }

    http.ListenAndServe(config.Env.Port, router)
}
