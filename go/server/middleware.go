package server

import (
    "regexp"
    "strings"
    "net/http"

    "blog2.0/go/config"

    "golang.org/x/net/context"
    "github.com/julienschmidt/httprouter"
)

func g(h httprouter.Handle) httprouter.Handle {
    return func (w http.ResponseWriter, r *http.Request, p httprouter.Params) {
        m, _ := regexp.Match("^/(api|static).*", []byte(r.URL.Path))
        if (m) {
            w.Write([]byte(r.URL.Path))
        }
        return
        Home(w, r, p)
    }
}

func AuthOnly(h httprouter.Handle) httprouter.Handle {
    return func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
        tokenHeader := r.Header.Get("Authorization")

        token := strings.Replace(tokenHeader, "Bearer ", "", 1)

        claims, err := ValidateToken(token, config.Jwt)

        if (err != nil) {
            http.Error(w, "Authorization failed", http.StatusUnauthorized)
            return
        }

        ctx := context.WithValue(r.Context(), "claims", claims)

        // Pass bearar token in header again
        w.Header().Set("Authorization", tokenHeader)

        h(w, r.WithContext(ctx), p)
    }
}

func WithUser(h httprouter.Handle) httprouter.Handle {
    return func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
        tokenHeader := r.Header.Get("Authorization")

        token := strings.Replace(tokenHeader, "Bearer ", "", 1)

        claims, err := ValidateToken(token, config.Jwt)

        if (err != nil) {
            h(w, r, p)
            return
        }

        ctx := context.WithValue(r.Context(), "claims", claims)

        // Pass bearar token in header again
        w.Header().Set("Authorization", tokenHeader)

        h(w, r.WithContext(ctx), p)
    }
}
