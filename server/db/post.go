package db

import (
    "database/sql"
    "fmt"
)

func AddPost(title string, content string, preview string, thumbnail string, categoryID int) error {
	db := GetDB()
	_, err := db.Exec("INSERT INTO posts (title, content, preview, thumbnail, categoryID) VALUES (?, ?, ?, ?, ?)", title, content, preview, thumbnail, categoryID)
	if err != nil {
		return fmt.Errorf("데이터 삽입 실패: %v", err)
	}
	fmt.Println("포스트 추가 성공:", title)
	return nil
}

type Post struct {
    ID        int    `json:"id"`
    Title     string `json:"title"`
    Thumbnail string `json:"thumbnail"`
    CreatedAt string `json:"createdAt"`
    Category string `json:"category"`
}

func GetPosts() ([]*Post, error) {
    posts := make([]*Post, 0, 10)
    
	db := GetDB()
	rows, err := db.Query("SELECT posts.id, posts.title, posts.thumbnail, posts.createdAt, categories.name  FROM posts LEFT JOIN categories ON posts.categoryID = categories.id WHERE status='PUBLISHED' ORDER BY createdAt DESC")
	if err != nil {
		return nil, fmt.Errorf("데이터 조회 실패: %v", err)
	}
	defer rows.Close()
    
	for rows.Next() {
		post := new(Post)
		if err := rows.Scan(&post.ID, &post.Title, &post.Thumbnail, &post.CreatedAt, &post.Category); err != nil {
			return nil, fmt.Errorf("데이터 읽기 실패: %v", err)
		}
		posts = append(posts, post)
	}
	return posts, nil
}

type PostDetail struct {
    ID        int    `json:"id"`
    Title     string `json:"title"`
    Content string `json:"content"`
    CreatedAt string `json:"createdAt"`
    Category string `json:"category"`
}

func GetPostByID(id int) (PostDetail, error) {
    var post PostDetail
    db := GetDB()
    
    err := db.QueryRow("SELECT posts.id, posts.title, posts.content, posts.createdAt, categories.name FROM posts LEFT JOIN categories ON posts.categoryID = categories.id WHERE status='PUBLISHED' AND posts.id = ?", id).Scan(&post.ID, &post.Title, &post.Content, &post.CreatedAt, &post.Category)
    
    if err != nil {
        if err == sql.ErrNoRows {
            return PostDetail{}, fmt.Errorf("No data found: %v", err)
        } else {
            return PostDetail{}, fmt.Errorf("에러발생 %v", err)
        }
    }
    
    return post, nil
}

func GetPostsByTag(keyword string) ([]*Post, error) {
    posts := make([]*Post, 0, 10)

    db := GetDB()
    rows, err := db.Query(`
        SELECT p.id AS post_id, p.title, p.thumbnail, p.createdAt, c.name AS category
        FROM posts p
        LEFT JOIN categories c ON p.categoryID = c.id
        LEFT JOIN post_tags pt ON p.id = pt.post_id
        LEFT JOIN tags t ON pt.tag_id = t.id
        WHERE p.status = 'PUBLISHED'
        GROUP BY p.id, c.name
        HAVING COUNT(t.id) > 0 AND GROUP_CONCAT(t.name) LIKE ?
        LIMIT 10
    `, "%"+keyword+"%")
    if err != nil {
        return nil, fmt.Errorf("데이터 조회 실패: %v", err)
    }
    defer rows.Close()

    for rows.Next() {
        post := new(Post)
        if err := rows.Scan(&post.ID, &post.Title, &post.Thumbnail, &post.CreatedAt, &post.Category); err != nil {
            return nil, fmt.Errorf("데이터 읽기 실패: %v", err)
        }
        posts = append(posts, post)
    }
    return posts, nil
}

func GetPostsByCategory(category string) ([]*Post, error) {
    posts := make([]*Post, 0, 10)
    db := GetDB()
    rows, err := db.Query("SELECT posts.id, posts.title, posts.thumbnail, posts.createdAt, categories.name FROM posts LEFT JOIN categories ON posts.categoryID = categories.id WHERE status='PUBLISHED' AND categories.name=?", category)
    if err != nil {
        return nil, fmt.Errorf("데이터 조회 실패: %v", err)
    }
    defer rows.Close()

    for rows.Next() {
        post := new(Post)
        if err := rows.Scan(&post.ID, &post.Title, &post.Thumbnail, &post.CreatedAt, &post.Category); err != nil {
            return nil, fmt.Errorf("데이터 읽기 실패: %v", err)
        }
        posts = append(posts, post)
    }
    return posts, nil
}