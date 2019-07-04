import React from 'react';
import { TextStyle } from '../style'
import Typography from '@material-ui/core/Typography';

const NotFound = () => (
    <div style={TextStyle}>
        <Typography variant="h1" component="h2" gutterBottom>
            OOPS, ERROR 404
        </Typography>
    </div>
);

export default NotFound;