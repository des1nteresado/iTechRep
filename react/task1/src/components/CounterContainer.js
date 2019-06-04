import React from "react";
import Counter from "../views/Counter";

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement() {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDecrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    handleReset() {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <Counter count={this.state.count}
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                handleReset={this.handleReset} />
        );
    }
}

export default CounterContainer;