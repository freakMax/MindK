import './Profile.css'

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
        </div>
        </>
    )
}

export default Profile;