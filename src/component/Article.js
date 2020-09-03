import React from 'react';
import { Link } from 'react-router-dom';
//import '../lib';
//import { Link } from 'react-router-dom';
export const Article = ({match}) => {
    React.useEffect(()=>{
    getArticle();
},[])
const [article,setArticle]=React.useState({});
const [comment,setComment]=React.useState([]);
const getArticle = async()=>{
   const reponse= await fetch('https://jsonplaceholder.typicode.com/posts/' + match.params.id);
   const Post= await reponse.json();
   const reponse2 = await fetch('https://jsonplaceholder.typicode.com/posts/' + match.params.id + '/comments');
   const allComment= await reponse2.json();
    setArticle(Post);
    setComment(allComment);

}
    return (
        <div>
        <h1>blog Article</h1>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <div className='comments'>
            {
                comment.map(el=><div>
                    <h4>{el.name}</h4> 
                <p>{el.body}</p></div>)
            }
        </div>
        <Link to='/Blog'>retour</Link>
        </div>
    )
}
export default Article 
