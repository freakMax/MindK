import PropTypes from 'prop-types';
import './Profile.css'
import {Link} from 'react-router-dom'

function Profile({setData}) {

    const updateProfile = (e) =>{
        e.preventDefault()
        setData({name:e.target[0].value,surname:e.target[1].value})
    }

    return (
        <>
        <div className='formProfile'>
            <form action="" onSubmit={updateProfile} className='form'>
                <p className='formText'>New name</p>
                <input type="text" className='itemForm' name='setName'/>
                <p className='formText'>New surname</p>
                <input type="text" className='itemForm' name='setSurname'/>
                <button type='submit' className='profilebutton itemForm'>Rename</button>
            </form>
            <Link to='/auth'><button type='submit' className='reg-btn'>Log Out</button></Link>
        </div>
        </>
    )
}

Profile.propTypes = {
    setData: PropTypes.func.isRequired
}

export default Profile;