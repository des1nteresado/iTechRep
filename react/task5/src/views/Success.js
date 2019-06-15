import React from 'react';
import { TextStyle } from '../style'
import TextField from '@material-ui/core/TextField';

const Success = (props) => {
   const { store } = props.location.state;
   const value = store.formControls['email'].value + '/' + store.formControls['password'].value;
   return (
      <div style={TextStyle}>
         <TextField
            id="outlined-multiline-flexible"
            label="Email/Password"
            multiline
            rowsMax="6"
            style={{ width: 500 }}
            value={value}
            margin="normal"
            InputProps={{
               readOnly: true
            }}
            helperText="Send from login-redux form"
            variant="outlined"
         />
      </div>
   )
};

export default Success;