package db

import (
	"database/sql"
	"fmt"
	"log"
	_ "github.com/go-sql-driver/mysql"
)

var database *sql.DB

func InitDB(){
	dsn := "root:hyseo0207*@tcp(127.0.0.1:3306)/blog"
	
	var err error
	database, err = sql.Open("mysql", dsn)
	
	if err != nil {
		log.Fatal("DB 연결 실패:", err)
	}
	
	if err = database.Ping(); err != nil {
		log.Fatal("DB 핑 실패:", err)
	}

	fmt.Println("MySQL 연결 성공!")

}

func GetDB() *sql.DB {
	return database
}
