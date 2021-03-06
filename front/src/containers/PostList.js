import Articles from '../components/Main/Articles/Articles'
import {getPosts} from '../Requests/requests'
import {useQuery} from 'react-query'
import { useState } from 'react'
import '../components/Main/Edit/Edit.css'

function PostListContainer() {
    const [limit,setLimit] = useState(3)
    const {data:response,isFetching} = useQuery(['posts',limit],()=>getPosts(limit))
    const posts = response?.data || []

    const handleClick = () => setLimit(limit+3)
    return (
    <>
    <Articles posts={posts} isFetching={isFetching}/>
    <button onClick={handleClick} className='moreBtn'>Load more post</button>
    </>)
}

export default PostListContainer;