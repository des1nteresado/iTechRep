import React from 'react';
import { TextStyle } from '../Counter/style'

const Login = (props) => (
    <div style={TextStyle}>
      <p>{props.location.pathname} </p>
      <h1>login</h1>
    </div>
  )

export default Login;