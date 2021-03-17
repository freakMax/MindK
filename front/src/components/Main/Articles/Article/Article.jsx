import './Article.css'
import {Link} from 'react-router-dom'
import ArticleHandler from '../../AddArticles/ArticleHandler';


function Article({title,content,id}) {
    return (
        <>
            <div className='article-item'>
                <p className='title'>{title}</p>
                <p className='text'>{content}</p>
                {<ArticleHandler id={id}/>}
                {/* <Link to={`/edit/${id}`}>Edit</Link> */}
            </div>
        </>
    )
}

export default Article;