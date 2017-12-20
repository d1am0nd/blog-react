package server

import (
	"blog3.0/go/config"
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func NewRouter() *httprouter.Router {
	r := httprouter.New()

	r.GET("/api/users/current", AuthOnly(CurrentUser))
	r.POST("/api/users/login", Login)
	r.GET("/api/posts/all", WithUser(ActivePosts))
	r.POST("/api/posts/edit/:id", AuthOnly(UpdatePost))
	r.POST("/api/posts/delete/:id", AuthOnly(DeletePost))
	r.POST("/api/posts/create", AuthOnly(CreatePost))
	r.GET("/api/posts/my/all", AuthOnly(MyPosts))
	r.GET("/api/posts/single/:slug", WithUser(PostBySlug))
	r.GET("/api/images/all", AllImages)
	r.GET("/api/images/single/:id", ImageById)
	r.POST("/api/images/create", AuthOnly(CreateImage))
	r.POST("/api/images/edit/:id", AuthOnly(UpdateImage))
	r.GET("/api/images/delete/:id", AuthOnly(DeleteImage))
	r.ServeFiles("/uploads/*filepath", http.Dir("../public/uploads"))
	r.ServeFiles("/js/*filepath", http.Dir("../public/js"))

	if !config.Env.IsProd() {
		r.GET("/favicon.ico", serveFile("../public/favicon.ico"))
		r.GET("/robots.txt", serveFile("../public/robots.txt"))
		r.GET("/web.config", serveFile("../public/web.config"))

		// These have to match the ones in vue router and redirect to Home
		r.GET("/login", Home)
		r.GET("/admin/*we", Home)
		r.GET("/posts/*we", Home)
		r.GET("/", Home)
	}
	return r
}
