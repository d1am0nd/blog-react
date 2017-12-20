package server

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

type JwtConfig interface {
	GetIssuer() string
	GetSecret() string
}

type Claims struct {
	UserId uint32 `json: "user_id"`
	jwt.StandardClaims
}

func (c Claims) IsEmpty() bool {
	if c == (Claims{}) {
		return false
	}
	return true
}

func NewClaims(uid uint32, jwtConfig JwtConfig) Claims {
	return Claims{
		uid,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
			Issuer:    jwtConfig.GetIssuer()}}
}

func CreateToken(claims Claims, jwtConfig JwtConfig) string {
	claims.Issuer = jwtConfig.GetIssuer()

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString([]byte(jwtConfig.GetSecret()))
	if err != nil {
		panic(err)
	}
	return "Bearer " + tokenString
}

func ValidateToken(myToken string, jwtConfig JwtConfig) (Claims, error) {
	claims := Claims{}

	_, err := jwt.ParseWithClaims(myToken, &claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtConfig.GetSecret()), nil
	})

	return claims, err
}
