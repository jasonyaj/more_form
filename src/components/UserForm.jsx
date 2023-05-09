import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 1) {
          setFirstNameError("First name is required!");
      } else if(e.target.value.length < 2) {
          setFirstNameError("First name must be 2 characters or longer!");
      } else {
          setFirstNameError("");
      }
    }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 1) {
        setLastNameError("Last name is required!");
    } else if(e.target.value.length < 2) {
        setLastNameError("Last name must be 2 characters or longer!");
    } else {
        setLastNameError("");
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("Email is required!");
    } else if(e.target.value.length < 2) {
        setEmailError("Email must be 2 characters or longer!");
    } else {
        setEmailError("");
    }
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        handleConfirmPassword();
        setPasswordError("Password is required!");
      } else if(e.target.value.length < 8) {
        setPasswordError("Password must be 8 characters or longer!");
      } else {
        setPasswordError("");
      }
    }
  
    const handleConfirmPassword = (e) => {
      setConfirmPassword(e.target.value);
      console.log(e.target.value)
      if(e.target.value.length < 1) {
        console.log({password})
          setConfirmPasswordError("Password re-entry is required!");
      } else if(e.target.value !== {password}) {
          setConfirmPasswordError("Passwords must match!");
      } else {
          setConfirmPasswordError("");
      }
    }
    
  return (
    <div>
      <Container>
        <Form>
          <Form.Group className="mb-3 mt-3" controlId='firstName'>
            <Form.Label>
              First Name:
            </Form.Label>
            <Form.Control onChange={handleFirstName}/>
            {
              firstNameError ?
              <p style={{color:'red'}}>{ firstNameError }</p> :
              ''
            }
            value={firstName}
          </Form.Group>
          <Form.Group className="mb-3" controlId='lastName'>
            <Form.Label>
              Last Name:
            </Form.Label>
            <Form.Control onChange={handleLastName}/>
            {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
            }
            value={lastName}
          </Form.Group>
          <Form.Group className="mb-3" controlId='email'>
            <Form.Label>
              Email:
            </Form.Label>
            <Form.Control onChange={handleEmail}/>
            {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
            }
            value={email}
          </Form.Group>
          <Form.Group className="mb-3" controlId='password'>
            <Form.Label>
              Password:
            </Form.Label>
            <Form.Control 
            type='password' 
            onChange={handlePassword}
            />
            {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
            }
            value={password}
          </Form.Group>
          <Form.Group className="mb-3" controlId='confirmPassword'>
            <Form.Label>
              Confirm Password:
            </Form.Label>
            <Form.Control 
            type='password'
            onChange={handleConfirmPassword}
            />
            {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
            }
            value={confirmPassword}
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default UserForm;