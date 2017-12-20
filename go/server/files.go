package server

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

type File struct {
	Name  string `json:"name"`
	Path  string `json:"path"`
	IsDir bool   `json:"is_dir"`
}

func GetFilesInDir(dir string) ([]File, error) {
	var fslice []File

	// Remove "/" if its last character
	if strings.HasSuffix(dir, "/") {
		dir = dir[:len(dir)-1]
	}

	files, err := ioutil.ReadDir(dir)

	if err != nil {
		return fslice, err
	}

	for _, file := range files {
		fi, err := os.Stat(appendFile(dir, file.Name()))
		if err != nil {
			fmt.Println("filename err")
			panic(err)
		}

		fslice = append(fslice, File{
			Name:  file.Name(),
			Path:  dir + "/" + file.Name(),
			IsDir: fi.IsDir()})
	}

	return fslice, nil
}

func DeleteIfExists(path string) error {
	err := os.Remove(path)
	return err
}

func FileExists(path string) bool {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return false
	}
	return true
}

func appendFile(dir string, file string) string {
	return dir + string(os.PathSeparator) + file
}
