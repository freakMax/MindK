import PropTypes from 'prop-types';
import './Header.css'
import Logo from './Logo/Logo'
import Button from './Button/Button'
import User from './User/User'
import Articles from '../Main/Articles/Articles'
import AddArticles from '../Main/AddArticles/AddArticles'
import Profile from '../Main/Profile/Profile'


function Header({data,setElement,setData}) {
    const logoHandler = () => setElement(<Articles/>)
    const buttonHandler = () => setElement(<AddArticles/>)
    const userHandler = () => setElement(<Profile setData={setData}/>)


    return (
        <div className="header">
            <Logo logoHandler={logoHandler} />
            <Button buttonHandler={buttonHandler} />
            <User userHandler={userHandler} data={data} />
            <div className='line'>
            </div>
        </div>
    );
}

Header.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired
    }),
    setElement: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired
}

export default Header;