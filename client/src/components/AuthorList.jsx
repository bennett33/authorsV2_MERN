import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const AuthorList = (props) => {
    const { removeFromDom } = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            {props.authors.map((author, idx) => {
                return <div key={idx}>
                    <Link to ={`/authors/${author._id}`}>
                        <p>{author.firstName} {author.lastName}</p>
                    </Link>
                    <button onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                </div>
            })}
        </div>
    )
}
    
export default AuthorList;
