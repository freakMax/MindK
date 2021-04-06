const db = require('../services/db')

class postsController {
  async addPost(req, res) {
    console.log(req.body)
    const { title, content, access } = req.body
    const id = req.user
    const token = req.body.image.toString().split(',')
    const resolution = token[0].split(';')[0].split('/')
    const raw = new Buffer(token[1], 'base64')
    const name = `image-${Date.now()}.${resolution[1]}`
    console.log(name)

    fs.writeFile(
      `C:\\Users\\Max\\Desktop\\MindK\\Youngsters\\front\\public\\uploads\\${name}`,
      raw,
      function (err) {
        if (err) console.log(err)
        console.log('End')
      }
    )
    const newPost = await db.query(
      'INSERT INTO posts (title,content,user_id,access,image) values ($1,$2,$3,$4,$5) RETURNING *',
      [title, content, id, access, image]
    )
    console.log(newPost.rows[0])
  }
  async getAllPost(req, res) {
    const limit = req.query.limit || 10
    const allPosts = await db.query('SELECT * FROM posts limit $1', [limit])
    res.send(allPosts.rows)
  }
  async getOnePost(req, res) {
    const id = req.params.id
    const post = await db.query('SELECT * FROM posts WHERE id = $1', [id])
    res.json(post.rows)
  }
  async updatePost(req, res) {
    const { title, content, access } = req.body
    const id = req.params.id
    await db.query(
      'UPDATE posts set title = $1,content = $2, access = $4 where id = $3 RETURNING *',
      [title, content, id, access]
    )
  }
  async deletePost(req, res) {
    const id = req.params.id
    const deletePost = await db.query('DELETE FROM posts where id = $1', [id])
    res.json(deletePost.rows[0])
  }
}

module.exports = new postsController()
