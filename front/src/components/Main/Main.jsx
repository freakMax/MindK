import PropTypes from 'prop-types';


function Main({element}) {
    return (
    <>
        {element}
    </>
    )
}


Main.propTypes = {
    element: PropTypes.object.isRequired
}

export default Main;