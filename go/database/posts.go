package database

import (
	"fmt"
	"time"
	"regexp"

	"database/sql"
)

const postT = "posts"

type NullDate struct {
    sql.NullString
}

func (nd NullDate) MarshalJSON() ([]byte, error) {
	if !nd.Valid {
		return []byte("null"), nil
	}

	return []byte("\""+nd.String+"\""), nil
}

func (nd *NullDate) UnmarshalJSON(data []byte) error {
	// http://www.golangprograms.com/regular-expression-to-extract-date-yyyy-mm-dd-from-string.html
	re := regexp.MustCompile(`\d{4}-\d{2}-\d{2}`)
	nd.Valid = false
	nd.String = "0000-00-00"
	fmt.Println(re.FindString(string(data)))
	if date := re.FindString(string(data)); len(date) == 10 {
		nd.Valid = true
		nd.String = date
	}

	return nil
}

type Post struct {
	Id          uint32         `db:"id" json:"id,omitempty"`
	Active      bool           `db:"active" json:"active,omitempty"`
	UserId      uint32         `db:"user_id" json:"user_id,omitempty"`
	Title       string         `db:"title" json:"title,omitempty"`
	Slug        string         `db:"slug" json:"slug,omitempty"`
	Content     string         `db:"content" json:"content,omitempty"`
	Summary     string         `db:"summary" json:"summary,omitempty"`
	PublishedAt *NullDate `db:"published_at" json:"published_at"`
	CreatedAt   string         `db:"created_at" json:"created_at,omitempty"`
	UpdatedAt   string         `db:"updated_at" json:"updated_at,omitempty"`
}

func (p *Post) GetId() string {
	r := ""
	r = fmt.Sprintf("%v", p.Id)
	return r
}

func (p *Post) GetUserId() string {
	r := ""
	r = fmt.Sprintf("%v", p.UserId)
	return r
}

func (p *Post) CreatedAtTime() time.Time {
	return parseDbTimestamp(&p.CreatedAt)
}

func (p *Post) UpdatedAtTime() time.Time {
	return parseDbTimestamp(&p.UpdatedAt)
}

func NewPost() Post {
	return Post{}
}

func (p *Post) IsEmpty() bool {
	if *p == (Post{}) {
		return true
	}
	return false
}

func FindActivePostBySlug(slug string) (Post, error) {
	post := Post{}

	err := SQL.Get(&post, `SELECT
        id, slug, published_at, summary, content, title
        FROM `+postT+`
        WHERE slug = ?
        AND published_at < NOW()
        LIMIT 1`, slug)
	return post, err
}

func FindMyPostBySlug(userId uint32, slug string) (Post, error) {
	post := Post{}

	err := SQL.Get(&post, "SELECT * FROM "+postT+" WHERE slug = ? AND (published_at < NOW() OR user_id = ?) LIMIT 1", slug, userId)
	return post, err
}

func FindOnlyMyPostById(userId uint32, id uint32) (Post, error) {
	post := Post{}

	err := SQL.Get(&post, "SELECT * FROM "+postT+" WHERE id = ? and user_id = ? LIMIT 1", id, userId)
	return post, err
}

func FindOnlyMyPostBySlug(userId uint32, slug string) (Post, error) {
	post := Post{}

	err := SQL.Get(&post, "SELECT * FROM "+postT+" WHERE slug = ? AND user_id = ? LIMIT 1", slug, userId)
	return post, err
}

func GetActivePosts() ([]Post, error) {
	posts := []Post{}

	err := SQL.Select(&posts, `SELECT
        id, slug, published_at, summary, title
        FROM posts
        WHERE published_at < NOW()
        ORDER BY published_at DESC`)
	return posts, err
}

func GetUsersPosts(userId uint32) ([]Post, error) {
	posts := []Post{}

	uid := fmt.Sprint(userId)

	err := SQL.Select(&posts, "SELECT * FROM posts WHERE user_id = ?", uid)
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

func DeletePostById(id uint32, userId uint32) error {
	stmt, err := SQL.Prepare("DELETE FROM posts WHERE id = ? AND user_id = ?")
	if err != nil {
		return err
	}
	_, err = stmt.Exec(id, userId)
	return err
}

func CreatePost(post *Post, userId uint32) error {
	now := time.Now()

	post.CreatedAt = timeToDb(&now)
	post.UpdatedAt = timeToDb(&now)

	stmt, err := SQL.Prepare("INSERT INTO posts (active, user_id, title, slug, content, summary, published_at, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
	if err != nil {
		return err
	}
	_, err = stmt.Exec(post.Active, userId, post.Title, post.Slug, post.Content, post.Summary, post.PublishedAt, post.CreatedAt, post.UpdatedAt)
	return err
}

func UpdatePostById(post *Post, userId uint32, id uint32) error {
	now := time.Now()
	post.UpdatedAt = timeToDb(&now)

	stmt, err := SQL.Prepare("UPDATE posts SET active=?, title=?, slug=?, content=?, summary=?, published_at=?, created_at=?, updated_at=? WHERE user_id = ? AND id = ?")
	if err != nil {
		return err
	}
	_, err = stmt.Exec(post.Active, post.Title, post.Slug, post.Content, post.Summary, post.PublishedAt, post.CreatedAt, post.UpdatedAt, userId, id)
	return err
}
