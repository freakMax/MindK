import './PostArticle.css'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'

function PostArticle({ routes }) {
  const id = routes.match.params.id
  const { data: response } = useQuery('post', () => getOnePost({ id }))
  const post = response?.data || false
  return (
    <>
      <div className='article-item'>
        <p className='title'>{post.title}</p>
        <p className='text'>{post.content}</p>
        {image && <img src={`/uploads/${post.image}`} />}
      </div>
    </>
  )
}

export default PostArticle
