import './Article.css'
import {Link} from 'react-router-dom'

function Article({title,content,id}) {
    return (
        <>
            <div className='article-item'>
                <p className='title'>{title}</p>
                <p className='text'>{content}</p>
                <Link to={`/edit/${id}`}>Edit</Link>
            </div>
        </>
    )
}

export default Article;