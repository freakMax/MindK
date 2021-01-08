import PropTypes from 'prop-types';


function Main({element,userData}) {
    return (
    <>
        {element}
    </>
    )
}


Main.propTypes = {
    element: PropTypes.element.isRequired,
    userData: data
}

const data = PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    avatar:avatarProp,
    friends: PropTypes.array.isRequired,
    articles: articleProp,
})

const avatarProp = PropTypes.shape({
    fileId: PropTypes.number.isRequired,
    file: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        path: PropTypes.string,isRequired,
        size: PropTypes.number.isRequired
    })
})

const articleProp = PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
    editedAt: PropTypes.string.isRequired,
    likes: PropTypes.arrayOf(likeProp)
})

const likeProp = PropTypes.shape({
    userId: PropTypes.number.isRequired,
    user: PropTypes.shape({
        id: PropTypes.number.isRequired
    }),
    date: PropTypes.string.isRequired
})


export default Main;