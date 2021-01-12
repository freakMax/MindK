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
}


export default Main;