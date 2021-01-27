import './AddArticles.css'
import PropTypes from 'prop-types';


function AddArticles({setPosts,posts}) {
    const updatePosts = (e) => {
        e.preventDefault()
        setPosts([...posts,{title:e.target[0].value,text:e.target[1].value}])
    }

    return (
        <>
        <div className='form'>
            <form action="" onSubmit={updatePosts}>
                <p className='addText'>Title</p>
                <input type="text" className='formAdd'/>
                <p className='addText'>Text</p>
                <input type="text" className='formAdd'/>
                <button className='formAddbtn' type='submit'>Post</button>
            </form>
        </div>
        </>
    )
    
}

AddArticles.propTypes = {
    setPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

export default AddArticles;