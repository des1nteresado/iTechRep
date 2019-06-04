import React from "react";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { ButtonStyle, TextStyle, GridStyle } from './style'

const Counter = props => {
    return (
        <div>
            <p style={TextStyle}>{props.count}</p>
            <Grid container style={GridStyle} spacing={5}>
                <Grid item>
                    <Button style={ButtonStyle} variant="contained" color="primary" onClick={() => props.handleIncrement()}>+</Button>
                </Grid>
                <Grid item>
                    <Button style={ButtonStyle} variant="contained" color="primary" onClick={() => props.handleDecrement()}>-</Button>
                </Grid>
                <Grid item>
                    <Button style={ButtonStyle} variant="contained" color="primary" onClick={() => props.handleReset()}>reset</Button>
                </Grid>
            </Grid>
        </div >
    );
}

Counter.propTypes = {
    count: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired
}

export default Counter;
