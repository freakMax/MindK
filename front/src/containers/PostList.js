import Articles from '../components/Main/Articles/Articles'
import axios from 'axios'
import {useState,useEffect} from 'react'

function PostListContainer() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/posts').then((res)=>setPosts(res.data))
    },[])
    return <Articles posts={posts}/>
}

export default PostListContainer;