import React from "react";
import SeedIcon from "./seed-icon.jsx";
import SeedAmong from "./seed-among.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.storage = this.props.storage;
        this.farm = this.props.farm;
        this.sellAll = this.sellAll.bind(this);
    }

    sellAll(e) {
        this.farm.sellProducts();
        this.props.updateCoins();
    }

    render() {
        return <div id="barn">
            {this.storage.map(el => <div key={el.type}>
                <SeedIcon icon={el.icon} />
                <SeedAmong among={el.income} />
            </div>)}
            <button className="sell_btn" onClick={this.sellAll}>Sell all</button>
        </div>
    }
}