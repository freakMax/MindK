import './Articles.css'
import Article from './Article/Article'
import PropTypes from 'prop-types';

function Articles({posts,isFetching}) {
    return (
        <>
        <div className='article-container'>
            {isFetching && 'Loading...'}
            {!isFetching && posts.map((item,index) => <Article title={item.title} content={item.content} key={index} id={item.id}/>)
            }
        </div>
        </>
    )
}


Articles.propTypes = {
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
}

export default Articles;