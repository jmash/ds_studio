import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Login = props => {
  return (
    <>
        <h2>Login</h2>
        <Form>
            <Form.Group controlId="formUserEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group controlId="formUserPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        
    </>
  )
}

Login.propTypes = {};

export default Login