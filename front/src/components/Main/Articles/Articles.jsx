import './Articles.css'
import Article from './Article/Article'
import PropTypes from 'prop-types';

function Articles({posts}) {
    return (
        <>
        <div className='article-container'>
            {
                posts.map((item,index) => <Article title={item.title} text={item.text} key={index}/>)
            }
        </div>
        </>
    )
}


Articles.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default Articles;