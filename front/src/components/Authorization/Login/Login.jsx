
function Login() {
    return (
        <>
        <div className='reg-div'>
            <form action="submit">
                <div className='reg-text'>Your email</div>
                <input type="text" className='reg-input'/>
                <div className='reg-text'>Your password</div>
                <input type="text" className='reg-input'/>
                <button type='submit' className='reg-btn'>Log In</button>
            </form>
        </div>
        </>
    );
}

export default Login;