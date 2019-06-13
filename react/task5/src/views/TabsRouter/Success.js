import React from 'react';
import { TextStyle } from '../Counter/style'
import Typography from '@material-ui/core/Typography';
import store from '../../store';
import { connect } from 'react-redux';

const Success = (props) => {
   console.log(store.getState().data)
   return (
      <div style={TextStyle}>
      <Typography variant="h1" component="h2" gutterBottom>
        {store.getState().data}
     </Typography>
   </div>
   )
};

const mapStateToProps = state => ({ data: state.data, formControls: state.formControls });
export default connect(mapStateToProps)(Success);
