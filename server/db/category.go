package db

import (
    "fmt"
)

type Category struct {
    ID        int    `json:"id"`
    Name     string `json:"name"`
}

func GetCategories() ([]*Category, error) {
    categories := make([]*Category, 0, 10)
    
	db := GetDB()
	rows, err := db.Query("SELECT id, name FROM categories")
	if err != nil {
		return nil, fmt.Errorf("데이터 조회 실패: %v", err)
	}
	defer rows.Close()
    
	for rows.Next() {
		category := new(Category)
		if err := rows.Scan(&category.ID, &category.Name); err != nil {
			return nil, fmt.Errorf("데이터 읽기 실패: %v", err)
		}
		categories = append(categories, category)
	}
	return categories, nil
}