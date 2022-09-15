import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //handler when the form is submitted
    const [errors, setErrors] = useState([]); 
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new author
        axios.post('http://localhost:8000/api/authors', {
            firstName,
            lastName
        })
            .then(res=>{
                console.log("testing", res)
                if (res.data.errors){
                    console.log(res.data.errors.firstName.message)
                    setErrors({
                        firstName: res.data.errors.firstName.message,
                        lastName: res.data.errors.lastName.message
                    })
                }
            })
            .catch(err=> {
                // console.log(err)
                // Set Errors
                setErrors({
                    errors
                });
                // console.log(errors);
        })    
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                {
                errors && 
                    <div>
                        <p>{errors.firstName}</p>
                        <p>{errors.lastName}</p>
                    </div>
                }
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={e => setLastName(e.target.value)} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

