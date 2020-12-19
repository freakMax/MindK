import './Button.css'

function Button(props) {
    return (
        <div className='button' onClick={props.onClick}>
            <span className='button-text'>Add Article</span>
        </div>
    );
}

export default Button;