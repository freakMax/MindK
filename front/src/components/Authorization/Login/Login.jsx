import axios from 'axios'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

function Login() {
    const responseSuccessGoogle = (response) => {
        axios({
            method:'POST',
            url:'http://localhost:4000/auth/google-login',
            data:{tokenId:response.tokenId}
        }).then(res => {
            console.log(res)
        })
    }
    const responseErrorGoogle = (response) => {
        console.log('Something went wrong')
    }
    const responseFacebook = (response) => {
        console.log(response);
        axios({
            method:'POST',
            url:'http://localhost:4000/auth/facebook-login',
            data:{accessToken:response.accessToken,userID:response.userID}
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <>
        <div className='reg-div'>
            <GoogleLogin
                clientId="356441273372-.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
        <div className='reg-div'>
            <FacebookLogin
                appId="477366656593125"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} 
                className='fbBtn'
            />
        </div>
        </>
    );
}

export default Login;