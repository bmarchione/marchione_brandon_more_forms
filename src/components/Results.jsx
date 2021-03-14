import React from 'react'

const Results = ({firstName, lastName, email, password,pwConfirm}) =>{
    return(
        <div>
            <h2>Results</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {pwConfirm}</p>
        </div>
    )
}

export default Results;