import './AddArticles.css'

function AddArticles() {
    return (
        <>
        <div>
            <form action="">
                <p className='addText'>Title</p>
                <input type="text" className='formAdd'/>
                <p className='addText'>Text</p>
                <input type="text" className='formAdd'/>
                <button className='formAdd'>Post</button>
            </form>
        </div>
        </>
    )
    
}

export default AddArticles;