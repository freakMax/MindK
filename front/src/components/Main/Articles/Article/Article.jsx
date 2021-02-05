import './Article.css'

function Article({title,text}) {
    return (
        <>
            <div className='article-item'>
                <p className='title'>{title}</p>
                <p className='text'>{text}</p>
            </div>
        </>
    )
}

export default Article;