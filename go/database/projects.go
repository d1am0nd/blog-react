package database

import (
    "fmt"
    "time"
)

const table = "projects"

type Project struct {
    Id          uint32         `db:"id" json:"id,omitempty"`
    UserId      uint32         `db:"user_id" json:"user_id,omitempty"`
    Position int `db:"position" json:"position,omitempty"`
    Title       string         `db:"title" json:"title,omitempty"`
    Url        string         `db:"url" json:"url,omitempty"`
    Source     string         `db:"source" json:"source,omitempty"`
    Description     string         `db:"description" json:"description,omitempty"`
    ImgSrc string `db:"img_src" json:"img_src,omitempty"`
    CreatedAt   string         `db:"created_at" json:"created_at,omitempty"`
    UpdatedAt   string         `db:"updated_at" json:"updated_at,omitempty"`
}

func (p *Project) GetId() string {
    r := ""
    r = fmt.Sprintf("%v", p.Id)
    return r
}

func (p *Project) GetUserId() string {
    r := ""
    r = fmt.Sprintf("%v", p.UserId)
    return r
}

func (p *Project) CreatedAtTime() time.Time {
    return parseDbTimestamp(&p.CreatedAt)
}

func (p *Project) UpdatedAtTime() time.Time {
    return parseDbTimestamp(&p.UpdatedAt)
}

func NewProject() Project {
    return Project{}
}

func (p *Project) IsEmpty() bool {
    if *p == (Project{}) {
        return true
    }
    return false
}

func FindProjectById(id uint32) (Project, error) {
    project := Project{}

    err := SQL.Get(&project, `SELECT
        id, user_id, position, title, url, source, description,
        img_src, created_at, updated_at
        FROM `+table+`
        WHERE id = ?
        LIMIT 1`, id)
    return project, err
}

func GetProjects() ([]Project, error) {
    projects := []Project{}

    err := SQL.Select(&projects, `SELECT
        id, user_id, position, title, url, source, description,
        img_src, created_at, updated_at
        FROM projects
        ORDER BY position DESC`)
    return projects, err
}

func GetUsersProjects(userId uint32) ([]Project, error) {
    projects := []Project{}

    uid := fmt.Sprint(userId)

    err := SQL.Select(&projects, "SELECT * FROM "+table+" WHERE user_id = ?", uid)
    return projects, err
}

func DeleteProjectBySlug(slug string, userId uint32) error {
    stmt, err := SQL.Prepare("DELETE FROM "+table+" WHERE slug = ? AND user_id = ?")
    if err != nil {
        return err
    }
    _, err = stmt.Exec(slug, userId)
    return err
}

func DeleteProjectById(id uint32, userId uint32) error {
    stmt, err := SQL.Prepare("DELETE FROM "+table+" WHERE id = ? AND user_id = ?")
    if err != nil {
        return err
    }
    _, err = stmt.Exec(id, userId)
    return err
}

func CreateProject(project *Project, userId uint32) error {
    now := time.Now()

    project.CreatedAt = timeToDb(&now)
    project.UpdatedAt = timeToDb(&now)

    stmt, err := SQL.Prepare(`
        INSERT INTO `+table+` (
            position, title, url, source, description, img_src,
            created_at, updated_at, user_id
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
     `)
    if err != nil {
        return err
    }
    _, err = stmt.Exec(project.Position, project.Title, project.Url,
        project.Source, project.Description, project.ImgSrc,
        project.CreatedAt, project.UpdatedAt,
        userId)
    return err
}

func UpdateProjectById(project *Project, userId uint32, id uint32) error {
    now := time.Now()
    project.UpdatedAt = timeToDb(&now)

    stmt, err := SQL.Prepare(
        `UPDATE `+table+` SET
            position=?, title=?, url=?, source=?, description=?, img_src=?
        WHERE user_id = ? AND id = ?
    `)
    if err != nil {
        return err
    }
    _, err = stmt.Exec(project.Position, project.Title, project.Url,
        project.Source, project.Description, project.ImgSrc, userId, id)
    return err
}
