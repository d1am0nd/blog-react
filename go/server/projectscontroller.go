package server

import (
    "fmt"
    "encoding/json"
    "net/http"
    "strconv"

    "blog3.0/go/database"

    "github.com/julienschmidt/httprouter"
)

func ProjectById(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
    if err != nil {
        http.Error(w, "Bad request", http.StatusBadRequest)
        return
    }
    id := uint32(i64)

    project, err := database.FindProjectById(id)
    if err != nil {
        http.Error(w, "Resource not found", http.StatusNotFound)
        return
    }
    json, err := json.Marshal(project)
    if err != nil {
        http.Error(w, "Problem jsonifying", http.StatusBadRequest)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write(json)
}

func AllProjects(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    projects, err := database.GetProjects()
    if err != nil {
        http.Error(w, err.Error(), http.StatusNotFound)
        return
    }
    json, err := json.Marshal(projects)
    if err != nil {
        http.Error(w, "Problem jsonifying", http.StatusBadRequest)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write(json)
}

func CreateProject(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    var userId = r.Context().Value("claims").(Claims).UserId
    project := database.NewProject()

    // Setting values
    fillProject(r, &project)

    err := database.CreateProject(&project, userId)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write([]byte("{success:true}"))
}

func UpdateProject(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    var userId = r.Context().Value("claims").(Claims).UserId

    i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
    if err != nil {
        http.Error(w, "Bad request", http.StatusBadRequest)
        return
    }
    id := uint32(i64)

    // Find existing project or 404
    project, err := database.FindProjectById(id)
    if err != nil {
        http.Error(w, "Resource not found", http.StatusNotFound)
        return
    }

    // Setting values
    fillProject(r, &project)

    err = database.UpdateProjectById(&project, userId, project.Id)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    json, err := json.Marshal(project)
    if err != nil {
        http.Error(w, "Problem jsonifying", http.StatusBadRequest)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write(json)
}

func DeleteProject(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
    var userId = r.Context().Value("claims").(Claims).UserId

    i64, err := strconv.ParseUint(p.ByName("id"), 10, 32)
    if err != nil {
        http.Error(w, "Bad request", http.StatusBadRequest)
        return
    }
    id := uint32(i64)

    // Find existing project or 404
    err = database.DeleteProjectById(id, userId)
    if err != nil {
        http.Error(w, "Resource not found", http.StatusNotFound)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.Write([]byte("{success:true}"))
}

func fillProject(r *http.Request, project *database.Project) {
    // Setting values
    fmt.Println(r.FormValue("title"))
    i, _ := strconv.Atoi(r.FormValue("position"))
    project.Position = i
    project.Title = r.FormValue("title")
    project.Url = r.FormValue("url")
    project.Source = r.FormValue("source")
    project.Description = r.FormValue("description")
    project.ImgSrc = r.FormValue("img_src")
    fmt.Println(project.Position, project.Title, project.Url)
}
