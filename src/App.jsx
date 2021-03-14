
import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results'

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    pwConfirm: "",
  });

  const onChange = (e) =>{
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
};

const createUser = (e) => {
    e.preventDefault();
    console.log("Welcome", user);
}
  return (
    <div className="App">
      <Form 
        inputs={user}
        handleInputChange = {onChange}
        handleFormSubmit = {createUser}
      />
      <Results 
        firstName ={user.firstName} 
        lastName ={user.lastName} 
        email ={user.email} 
        password ={user.password} 
        pwConfirm ={user.pwConfirm} 
      />
    </div>
  );
}

export default App;
