import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <p>First Name: {author.firstName}</p>
            <p>Last Name: {author.lastName}</p>
            <Link to={"/authors/" + author._id + "/edit"}>
                Edit
            </Link>


        </div>
        
    )
}
    
export default Detail;

