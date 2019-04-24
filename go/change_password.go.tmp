package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"syscall"

	"blog3.0/go/config"
	"blog3.0/go/database"

	"golang.org/x/crypto/bcrypt"
	"golang.org/x/crypto/ssh/terminal"
)

func main() {
	config.Init()

	database.Connect(config.Mysql.DSN())

	reader := bufio.NewReader(os.Stdin)

	var user database.User
	var err error
	for user, err = findUser(reader); err != nil; user, err = findUser(reader) {
		fmt.Println("User not found")
	}

	var pass string
	for pass, err = getPassword(); err != nil; pass, err = getPassword() {
		fmt.Println("Passwords do not match")
	}

	database.UpdatePasswordByUserId(pass, user.Id)

	fmt.Println("Password changed!")
}

func findUser(reader *bufio.Reader) (database.User, error) {
	fmt.Println("Enter email: ")
	email, _ := reader.ReadString('\n')

	return database.FindUserByEmail(strings.TrimSpace(email))
}

func getPassword() (string, error) {
	fmt.Println("Enter password: ")
	bytePass, _ := terminal.ReadPassword(int(syscall.Stdin))
	pass := strings.TrimSpace(string(bytePass))

	fmt.Println("Retype password: ")
	bytePass, _ = terminal.ReadPassword(int(syscall.Stdin))
	rePass := strings.TrimSpace(string(bytePass))

	if pass != rePass {
		return "", fmt.Errorf("Passwords do not match")
	}

	bytePass, _ = bcrypt.GenerateFromPassword([]byte(bytePass), 10)

	return string(bytePass), nil
}
