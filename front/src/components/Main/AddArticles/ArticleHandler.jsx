
import Edit from '../../Main/Edit/Edit'
import { useState } from 'react'

function ArticleEditBtn({ id }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

return (
    <>
        <button onClick={handleOpen}>
            <span>Edit post</span>
        </button>
        {open ? (
            <Edit postId={id} open={open} handleClose={handleClose} />
        ) : null}
    </>
)
}

export default ArticleEditBtn