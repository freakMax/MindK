import './Button.css'
import PropTypes from 'prop-types';

function Button({buttonHandler}) {
    return (
        <div className='button' onClick={buttonHandler}>
            <span className='button-text'>Add Article</span>
        </div>
    );
}

Button.propTypes = {
    buttonHandler: PropTypes.func.isRequired,
}

export default Button;