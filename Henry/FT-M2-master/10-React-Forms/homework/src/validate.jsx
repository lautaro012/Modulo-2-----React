 
 export function validate(input) {

    let errors = {};

    if (!input.username) {
     errors.username= 'username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
        errors.username = 'Username is invalid';
    }

    if (!input.password) {
        errors.password= 'password is required';
    } else if (!/(?=.*[0-9])/.test(input.password)) {
        errors.password = 'Password is invalid';
    }

    

    return errors;
  }