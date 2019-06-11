import React from 'react';
import { TextStyle } from '../Counter/style'

const About = (props) => (
    <div style={TextStyle}>
      <p>{props.location.pathname} </p>
      <h1>About company!</h1>
    </div>
  )

export default About;