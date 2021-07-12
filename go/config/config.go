package config

import (
	"encoding/json"
	"fmt"
	"os"
)

var Mysql MysqlConf
var Jwt JwtConf
var Env EnvConf

type MysqlConf struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Hostname  string `json:"hostname"`
	Port      int    `json:"port"`
	Name      string `json:"name"`
	Parameter string `json:"parameter"`
}

type JwtConf struct {
	Secret string `json:"secret"`
	Issuer string `json:"issuer"`
}

type EnvConf struct {
	Env         string `json:"env"`
	Port        string `json:"port"`
	AllowOrigin string `json:"allowOrigin"`
}

func Init() {
	Mysql = GetMysqlConf()
	Jwt = GetJwtConf()
	Env = GetEnvConf()
}

// MysqlConf
func (c MysqlConf) DSN() string {
	return c.Username +
		":" +
		c.Password +
		"@tcp(" +
		c.Hostname +
		":" +
		fmt.Sprintf("%d", c.Port) +
		")/" +
		c.Name + c.Parameter
}

func GetMysqlConf() MysqlConf {
	file, err := os.Open("./config/database.json")
	if err != nil {
		panic(err)
	}

	decoder := json.NewDecoder(file)
	configuration := MysqlConf{}

	err = decoder.Decode(&configuration)
	if err != nil {
		panic(err)
	}

	return configuration
}

// JwtConf
func (c JwtConf) SecretToByteArray() []byte {
	return []byte(c.Secret)
}

func GetJwtConf() JwtConf {
	file, err := os.Open("./config/jwt.json")

	if err != nil {
		panic(err)
	}

	decoder := json.NewDecoder(file)
	configuration := JwtConf{}

	err = decoder.Decode(&configuration)
	if err != nil {
		panic(err)
	}

	return configuration
}

func (j JwtConf) GetIssuer() string {
	return j.Issuer
}

func (j JwtConf) GetSecret() string {
	return j.Secret
}

func (c EnvConf) IsProd() bool {
	if c.Env == "prod" || c.Env == "production" {
		return true
	}
	return false
}

func GetEnvConf() EnvConf {
	file, err := os.Open("./config/env.json")

	if err != nil {
		panic(err)
	}

	decoder := json.NewDecoder(file)
	configuration := EnvConf{}

	err = decoder.Decode(&configuration)
	if err != nil {
		panic(err)
	}

	return configuration
}
