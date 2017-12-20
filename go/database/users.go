package database

import (
	"fmt"
	"time"
)

const userT = "users"

type User struct {
	Id            uint32 `db:"id" json:"id"`
	Name          string `db:"name" json:"name"`
	Email         string `db:"email" json:"email"`
	RememberToken string `db:"remember_token" json:"remember_token"`
	Password      string `db:"password" json:"password"`
	CreatedAt     string `db:"created_at" json:"created_at"`
	UpdatedAt     string `db:"updated_at" json:"updated_at"`
}

func (u *User) GetId() string {
	r := ""
	r = fmt.Sprintf("%v", u.Id)
	return r
}

func (u *User) CreatedAtTime() time.Time {
	return parseDbTimestamp(&u.CreatedAt)
}

func (u *User) UpdatedAtTime() time.Time {
	return parseDbTimestamp(&u.UpdatedAt)
}

func NewUser() User {
	return User{}
}

func (u *User) IsEmpty() bool {
	if *u == (User{}) {
		return true
	}
	return false
}

func FindUserById(id uint32) (User, error) {
	user := User{}

	err := SQL.Get(&user, "SELECT * FROM "+userT+" WHERE id = ? LIMIT 1", id)
	return user, err
}

func FindUserByEmail(email string) (User, error) {
	user := User{}

	err := SQL.Get(&user, "SELECT * FROM "+userT+" WHERE email = ? LIMIT 1", email)
	return user, err
}

/*
func GetActivePosts() ([]Post, error) {
    posts := []Post{}

    err := SQL.Select(&posts, "SELECT * FROM posts WHERE published_at < NOW()")
    return posts, err
}

func DeletePostBySlug(slug string, userId uint32) error {
    stmt, err := SQL.Prepare("DELETE FROM posts WHERE slug = ? AND user_id = ?")
    if err != nil {
        return err
    }
    _, err = stmt.Exec(slug, userId)
    return err
}

func CreatePost(post *Post, userId uint32, ) error {
    now := time.Now()

    post.CreatedAt = timeToDb(&now)
    post.UpdatedAt = timeToDb(&now)

    stmt, err := SQL.Prepare("INSERT INTO posts (active, user_id, title, slug, content, summary, published_at, created_at, updated_at")
    if err != nil {
        return err
    }
    _, err = stmt.Exec(post.Active, userId, post.Title, post.Slug, post.Content, post.Summary, post.PublishedAt, post.CreatedAt, post.UpdatedAt)
    return err
}

func UpdateBySlug(post *Post, userId uint32, slug string) error {
    now := time.Now()
    post.UpdatedAt = timeToDb(&now)

    stmt, err := SQL.Prepare("UPDATE posts SET active=?, title=?, slug=?, content=?, summary=?, published_at=?, created_at=?, updated_at=? WHERE user_id = ?")
    if err != nil {
        return err
    }
    _, err = stmt.Exec(post.Active, post.Title, post.Slug, post.Content, post.Summary, post.PublishedAt, post.CreatedAt, post.UpdatedAt, userId)
    return err
}
*/
