import './Logo.css'
import PropTypes from 'prop-types';

function Logo({logoHandler}) {
    return (
        <div className='logo' onClick={logoHandler}>
            <span className='logo-text'>Youngsters</span>
        </div>
    );
}

Logo.propTypes = {
    logoHandler: PropTypes.func.isRequired
}

export default Logo;