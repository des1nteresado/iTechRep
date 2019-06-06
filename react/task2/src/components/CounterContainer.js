import React from "react";
import Counter from "../views/Counter";

const CounterContainer = props => {
    return (
        <Counter {...props} />
    );
}

export default CounterContainer;