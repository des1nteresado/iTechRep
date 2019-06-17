import React from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { ButtonStyle, TextStyle, GridStyle } from '../../style';

const Counter = props => {
    return (
        <div>
            <p style={TextStyle}>{props.counterState.count}</p>
            <Grid container style={GridStyle} spacing={5}>
                <Grid item>
                    <Button style={ButtonStyle} variant="contained" color="primary" onClick={() => props.handleIncrement(props.counterState.id)}>+</Button>
                </Grid>
                <Grid item>
                    <Button style={ButtonStyle} variant="contained" color="primary" onClick={() => props.handleDecrement(props.counterState.id)}>-</Button>
                </Grid>
                <Grid item>
                    <Button style={ButtonStyle} variant="contained" color="primary" onClick={() => props.handleReset(props.counterState.id)}>reset</Button>
                </Grid>
            </Grid>
        </div >
    );
}

Counter.propTypes = {
    count: PropTypes.number,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
}

export default Counter;
