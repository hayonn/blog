package main

import (
	"net/http"
    
	"github.com/gin-gonic/gin"

	"blog/db"
	
	"strconv"
)

func getPosts(c *gin.Context){
    posts, _ := db.GetPosts()
    
	c.IndentedJSON(http.StatusOK, posts)
}

func getPostsByTag(c *gin.Context){
    tag := c.Query("tag")
    
    posts, _ := db.GetPostsByTag(tag)
    
	c.IndentedJSON(http.StatusOK, posts)
}

func getPost(c *gin.Context){
    id, err := strconv.Atoi(c.Param("id"))
    
    if err != nil {
        return
    }
    
    post, _ := db.GetPostByID(id)
    
	c.IndentedJSON(http.StatusOK, post)
}

func getCategories(c *gin.Context){
    categories, _ := db.GetCategories()
    
	c.IndentedJSON(http.StatusOK, categories)
}

func getPostsByCategory(c *gin.Context){
    category := c.Query("category")
    
    posts, _ := db.GetPostsByCategory(category)
    
	c.IndentedJSON(http.StatusOK, posts)
}

func main() {
	db.InitDB()
	router := gin.Default()
	router.GET("/api/posts",getPosts)
	router.GET("/api/post/:id",getPost)
	router.GET("/api/categories",getCategories)
	router.GET("/api/posts_by_tag",getPostsByTag)
	router.GET("/api/posts_by_category",getPostsByCategory)
	
	router.Run("localhost:3000")
}
