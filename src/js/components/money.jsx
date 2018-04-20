import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="money">Money: <span>{this.props.money}</span>$</div>
    }
}