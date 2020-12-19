import './Profile.css'

function Profile(props) {

    const updateProfile = (e) =>{
        e.preventDefault()
        const formName = document.querySelector('.formName')
        const formSurname = document.querySelector('.formSurname')

        props.updateData(formName.value,formSurname.value)
    }

    return (
        <>
        <div className='formProfile'>
            <form action="" onSubmit={updateProfile} className='form'>
                <p className='formText'>New name</p>
                <input type="text" className='formName itemForm'/>
                <p className='formText'>New surname</p>
                <input type="text" className='formSurname itemForm'/>
                <button type='submit' className='profilebutton itemForm'>Rename</button>
            </form>
        </div>
        </>
    )
}

export default Profile;