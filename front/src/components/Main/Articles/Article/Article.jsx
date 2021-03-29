import './Article.css'
import { Link } from 'react-router-dom'
import ArticleHandler from '../../AddArticles/ArticleHandler'

function Article({ title, content, id, image }) {
  return (
    <>
      <div className='article-item'>
        <p className='title'>{title}</p>
        <p className='text'>{content}</p>
        {image && <img src={`uploads/${image}`} />}
        <Link to={`/${id}`}>
          <button>Show more</button>
        </Link>
        {<ArticleHandler id={id} />}
      </div>
    </>
  )
}

export default Article
