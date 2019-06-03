import React from "react";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Counter = props => {
    return (
        <div>
            <p>{props.count}</p>
            <Grid container spacing={2}>
                <Grid item sm={4}>
                    <Button variant="contained" color="primary" onClick={() => props.handleIncrement()}>+</Button>
                </Grid>
                <Grid item sm={4}>
                    <Button variant="contained" color="primary" onClick={() => props.handleDecrement()}>-</Button>
                </Grid>
                <Grid item sm={4}>
                    <Button variant="contained" color="primary" onClick={() => props.handleReset()}>reset</Button>
                </Grid>
            </Grid>
        </div >
    );
}

export default Counter;
