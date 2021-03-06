const db = require('../services/db')

class postsController{
    async addPost(req,res){
        const {title,content,access} = req.body
        const id = req.user
        const newPost = await db.query('INSERT INTO posts (title,content,user_id,access) values ($1,$2,$3,$4) RETURNING *',[title,content,id,access])
        res.json(newPost.rows[0])
    }
    async getAllPost(req,res){
        const limit = req.query.limit || 10
        const allPosts = await db.query('SELECT * FROM posts limit $1',[limit])
        res.send(allPosts.rows)


    }
    async getOnePost(req,res){
        const id = req.params.id
        const post = await db.query('SELECT * FROM posts WHERE id = $1',[id])
        res.json(post.rows)
    }
    async updatePost(req,res){
        const {title,content,access} = req.body
        const id = req.params.id
        await db.query('UPDATE posts set title = $1,content = $2, access = $4 where id = $3 RETURNING *',[title,content,id,access])
    }
    async deletePost(req,res){
        const id = req.params.id
        const deletePost = await db.query('DELETE FROM posts where id = $1',[id])
        res.json(deletePost.rows[0])
    }
}

module.exports = new postsController()