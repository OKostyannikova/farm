import React from "react";
import ReactDOM from "react-dom";
import { farm, productsList } from "./product.js";
import Field from "./components/field.jsx";
import Money from "./components/money.jsx";
import ShopList from "./components/shop-list.jsx";
import Barn from "./components/barn.jsx";
import Inventory from "./components/inventory.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.farm = props.farm;
        this.state = {
            money: this.farm.coins,
            inventory: this.farm.inventory,
            storage: this.farm.storage
        }
        this.updateCoins = this.updateCoins.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.updateStorage = this.updateStorage.bind(this);
    }

    updateCoins() {
        this.setState({ money: this.farm.coins })
    }

    updateInventory() {
        this.setState({ inventory: this.farm.inventory })
    }

    updateStorage() {
        this.setState({ storage: this.farm.storage })
    }

    render() {
        return <div id="farm">
            <div className="ornamentals"></div>
            <Field />
            <Money money={this.state.money} />

            <ShopList shop={this.farm.shop}
                updateCoins={this.updateCoins}
                updateInventory={this.updateInventory} />

            <Barn storage={this.state.storage}
                updateCoins={this.updateCoins}
                farm={this.farm} />

            <Inventory inventory={this.state.inventory}
                updateInventory={this.updateInventory}
                updateStorage={this.updateStorage} />

        </div >
    }
}

ReactDOM.render(<App farm={farm} />, document.getElementById("app"));