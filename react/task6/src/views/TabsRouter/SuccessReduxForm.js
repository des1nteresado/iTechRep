import React from 'react';
import { TextStyle } from '../Counter/style'
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import { compose, spacing, palette } from '@material-ui/system';

const Box = styled('div')(
   compose(
      spacing,
      palette,
   ),
);

const SuccessReduxForm = (props) => {
   const { store } = props.location.state;
   return (
      <div style={TextStyle}>
         <Box color="white" bgcolor="gray" p={1}>
            <Typography variant="h3">
               Email: {store.email}
            </Typography>
            <Typography variant="h3">
               Password: {store.password}
            </Typography>
         </Box>
      </div>
   )
};

export default SuccessReduxForm;