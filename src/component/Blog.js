import React from 'react';
import '../lib';
import { Link } from 'react-router-dom';
export const Blog = () => {
    React.useEffect(()=>{
    getAllPosts();
},[])
const [post,setPost]=React.useState([]);
const getAllPosts = async()=>{
    const reponse= await fetch('https://jsonplaceholder.typicode.com/posts');
    const allPost= await reponse.json();
    setPost(allPost);
}
    return (
        <div>
        {post.take(10).map(post=><h4 className='blog-link'><Link to={`/Blog/${post.id}`} key={post.id}>{post.title}</Link></h4>)}
        </div>
    )
}
export default Blog 
