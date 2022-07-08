import React from 'react';
// import validate from './validate.jsx';

export function validate(input) {

  let errors = {};

  if (!input.username) {
   errors.username= 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
  }

  if (!input.password) {
      errors.password= 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = 'Password is invalid';
  }

  

  return errors;
}

export default function  Form() {
  const [Input, setInput] = React.useState ({
    username:'',
    password:'',
  })

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setInput({
      ...Input,
      [e.target.name] : e.target.value
    });
    setErrors(validate({
      ...Input,
      [e.target.name]: e.target.value
    }));
  }


  return (
    console.log(Input),
      <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
        type='text' placeholder='Ingrese usuario' name='username' onChange={handleInputChange} value={Input['username']} ></input> 
        <p className='danger'>{errors.username}</p>
      </div>
      <div>
        <label>Password:</label>
        <input className={errors.password && 'danger'}
        type='password' placeholder='Ingrese contraseña' name='password' onChange={handleInputChange} value={Input['password']}></input>
        <p className='danger'>{errors.password}</p>
      </div>
      </form>

  )
}
