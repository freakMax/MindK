import './Button.css'
import {useState} from 'react'
import Edit from '../../Main/Edit/Edit'

function Button() {
    const [open,setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
        <div className='button' onClick={handleOpen}>
            <span className='button-text'>Add Article</span>
        </div>   
        {open ? <Edit open={open} handleClose={handleClose}/>:null}
        </>
        );
}


export default Button;