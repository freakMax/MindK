import './Article.css'

function Article({title,content}) {
    return (
        <>
            <div className='article-item'>
                <p className='title'>{title}</p>
                <p className='text'>{content}</p>
            </div>
        </>
    )
}

export default Article;