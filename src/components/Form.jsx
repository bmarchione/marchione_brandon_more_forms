import React from 'react';

const Form = props => {
    const{inputs, handleInputChange, handleFormSubmit}=props;

    return (
        <form onSubmit={ handleFormSubmit }>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input 
                    onChange={handleInputChange} 
                    type="text" 
                    name= "firstName"
                    value = {inputs.firstName} 
                />
                {
                    <span>
                        {
                            inputs.firstName.length < 2 ?
                            <p>First Name must be longer than 2 characters.</p> : ""}
                    </span>
                }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input 
                    onChange={handleInputChange} 
                    type="text" 
                    name= "lastName"
                    value = {inputs.lastName}
                />
                {
                    <span>
                        {
                            inputs.lastName.length < 2 ?
                            <p>Last Name must be longer than 2 characters.</p> : ""}
                    </span>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input 
                    onChange={handleInputChange} 
                    type="text" 
                    name= "email"
                    value = {inputs.email}
                />
                {
                    <span>
                        {
                            inputs.email.length < 5 ?
                            <p>The field must be at least 5 characters.</p> : ""}
                    </span>
                }
            </div>
                <label htmlFor="password">Password: </label>
                <input 
                    onChange={handleInputChange} 
                    type="password" 
                    name= "password"
                    value = {inputs.password}
                />
                {
                    <span>
                        {
                            inputs.password.length < 8 ?
                            <p>Password must be longer than 8 characters.</p> : ""}
                    </span>
                }
            <div className="form-group">
                <label htmlFor="pwConfirm">Confirm Password: </label>
                <input 
                    onChange={handleInputChange} 
                    type="password" 
                    name= "pwConfirm"
                    value = {inputs.pwConfirm}
                />
                {
                    <span>
                        {
                            inputs.password !== inputs.pwConfirm ?
                            <p>Passwords must match.</p> : ""}
                    </span>
                }
            </div>
        </form>
    )
}
export default Form;