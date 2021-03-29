import './Button.css'
import { useState } from 'react'
import AddArticles from '../../Main/AddArticles/AddArticles'

function Button() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div className='button' onClick={handleOpen}>
        <span className='button-text'>Add Article</span>
      </div>
      {open && <AddArticles open={open} handleClose={handleClose} />}
    </>
  )
}

export default Button
