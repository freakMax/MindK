import './Registration.css'

function Registration() {
    return (
        <>
        <div className='reg-div'>
            <form action="submit">
                <div className='reg-text'>Your email</div>
                <input type="text" className='reg-input'/>
                <div className='reg-text'>Your password</div>
                <input type="text" className='reg-input'/>
                <button type='submit' className='reg-btn'>Submit</button>
            </form>
        </div>
        </>
    );
}

export default Registration;
