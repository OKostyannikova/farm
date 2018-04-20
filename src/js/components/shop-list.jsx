import React from "react";
import SeedIcon from "./seed-icon.jsx";
import SeedPrice from "./seed-price.jsx";
import Notification from "./notification.jsx";
import { farm, productsList } from "../product.js";
import PriceAndProductType from "../libs/get-price-and-product-type.js";
import showNotification from "../libs/show-notification.js"


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.seedsList = this.props.shop;
        this.state = {
            isShopOpen: false
        }
        this.buySeeds = this.buySeeds.bind(this);
        this.openShop = this.openShop.bind(this);
    }

    buySeeds(e) {
        const { seedPrice, purchasedSeed } = PriceAndProductType(e);
        if (farm.coins >= seedPrice) {
            const check = farm.inventory.some(el => el.type === purchasedSeed.type);
            if (!check) {
                purchasedSeed.among = 1;
                farm.inventory.push(purchasedSeed);
            } else {
                farm.inventory.forEach(el => {
                    el.type === purchasedSeed.type ? el.among++ : null;
                })
            }
            farm.coins -= seedPrice;
            this.props.updateCoins();
            this.props.updateInventory();
        } else {
            showNotification(e.currentTarget.previousElementSibling);
        }
    }

    openShop() {
        this.setState({ isShopOpen: !this.state.isShopOpen })
    }

    render() {
        return <div id="shop" className={this.state.isShopOpen ? "show_shop" : ""}>
            <div id="seeds_list">
                {this.seedsList.map(el => <div key={el.type}>
                    <Notification message="Not enough money!" />
                    <SeedIcon icon={el.icon} handlerClick={this.buySeeds} />
                    <SeedPrice cost={el.cost * 2} />
                </div>)}
            </div>
            <div id="shop_btn" onClick={this.openShop}>Shop</div>
        </div>
    }
}