import './Button.css'

function Button({buttonHandler}) {
    return (
        <div className='button' onClick={buttonHandler}>
            <span className='button-text'>Add Article</span>
        </div>
    );
}

export default Button;