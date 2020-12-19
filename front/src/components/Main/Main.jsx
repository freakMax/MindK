import Articles from './Articles/Articles'
import AddArticles from './AddArticles/AddArticles'
import Profile from './Profile/Profile'

function Main(props) {
    return (
    <>
        {props.logo && <Articles/>}
        {props.button && <AddArticles/>}
        {props.profile && <Profile updateData={props.updateData}/>}
    </>
    )
}

export default Main;