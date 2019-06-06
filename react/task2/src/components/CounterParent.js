import React from "react";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CounterContainer from "./CounterContainer";
import { CounterContainerStyle, TextStyle, GridStyle } from '../views/Counter/style'


const initialState = [{ count: 0, id: 1 }]

class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [{ count: 0, id: 1 }]
        };

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount() { //////////////readread
        this.setState({
            counters: initialState,
        })
    }

    randomInteger = (min, max) => {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    handleIncrement = (id) => {
        let newCounters = this.state.counters.map((counter) => {
            if (counter.id === id) {
                return ({ count: counter.count + 1, id: counter.id })
            }
            return counter;
        })
        this.setState({
            counters: newCounters
        });
    }

    handleDecrement = (id) => {
        let newCounters = this.state.counters.map((counter) => {
            if (counter.id === id) {
                return ({ count: counter.count - 1, id: counter.id })
            }
            return counter;
        })
        this.setState({
            counters: newCounters
        });
    }

    handleReset = (id) => {
        let newCounters = this.state.counters.map((counter) => {
            if (counter.id === id) {
                return ({ count: 0, id: counter.id })
            }
            return counter;
        })
        this.setState({
            counters: newCounters
        });
    }

    handleAddCounter = () => {
        let newCounters = this.state.counters.concat([{ count: 0, id: this.randomInteger(0, 1000000) }]);
        this.setState({
            counters: newCounters
        });
    }

    handleRemoveCounter = () => {
        let newCounters = this.state.counters;
        if (newCounters.length > 1)
            newCounters.pop();
        this.setState({
            counters: newCounters
        });
    };

    handleResetCounter = () => {
        this.setState({
            counters: initialState
        });
    }

    render() {
        // let counters = this.state.counters.map((counterObj) => 
        //     <CounterContainer
        //         handleReset={this.handleReset}
        //         handleIncrement={this.handleIncrement}
        //         handleDecrement={this.handleDecrement}
        //         key={counterObj.id}
        //         counterState={counterObj}
        //     />
        // )
        return (
            <React.Fragment>
                <p style={TextStyle}>{this.state.counters.length}</p>
                <Grid container style={GridStyle} spacing={5}>
                    <Grid item>
                <Button onClick={() => this.handleAddCounter()}>add counter</Button>
                    </Grid>
                    <Grid item>
                <Button onClick={() => this.handleRemoveCounter()}>remove counter</Button>
                    </Grid>
                    <Grid item>
                <Button onClick={() => this.handleResetCounter()}>reset counter</Button>
                    </Grid>
                </Grid>
                <div style={CounterContainerStyle}>
                    {
                        this.state.counters.map((counterObj) => 
                        <CounterContainer
                            handleReset={this.handleReset}
                            handleIncrement={this.handleIncrement}
                            handleDecrement={this.handleDecrement}
                            key={counterObj.id}
                            counterState={counterObj}
                        />
                    )
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default CounterParent;