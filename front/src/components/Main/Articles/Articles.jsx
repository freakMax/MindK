import './Articles.css'
import Article from './Article/Article'
import PropTypes from 'prop-types';

function Articles({posts}) {
    return (
        <>
        <div className='article-container'>
            {
                posts.map((item,index) => <Article title={item.title} content={item.content} key={index}/>)
            }
        </div>
        </>
    )
}


Articles.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Articles;