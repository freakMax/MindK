import PropTypes from 'prop-types';
import './Header.css'
import Logo from './Logo/Logo'
import Button from './Button/Button'
import User from './User/User'
import {Link} from 'react-router-dom'


function Header({username}) {
    return (
        <div className="header">
            <Link to='/posts'><Logo/></Link>
            <Link to='/addArticles'><Button/></Link>
            <User username={username} />
            <div className='line'>
            </div>
        </div>
    );
}

Header.propTypes = {
    username: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }),
}

export default Header;