import './Logo.css'

function Logo(props) {
    return (
        <div className='logo' onClick={props.onClick}>
            <span className='logo-text'>Youngsters</span>
        </div>
    );
}

export default Logo;