import { farm } from "./product";

export default class Resource {
    constructor(plot, product) {
        this.plot = plot;
        this.land = this.plot.firstChild;
        this.product = product;
        this.readyHarvest = false;
    }

    plant(updateStorage) {
        this.updateStorage = updateStorage;
        this.plot.className = "";
        this.updateInventory();
        this.grow();
    };

    updateInventory() {
        farm.inventory.forEach((el, i, inventory) => {
            el.type === this.product.type ? el.among-- : null;
            el.among == 0 ? inventory.splice(i, 1) : null;
        })
    }

    grow() {
        let { possibleIncome } = this.product;
        setTimeout(() => {
            this.readyHarvest = true;
            this.income = Math.floor(Math.random() * ((possibleIncome + 2) - possibleIncome + 1) + possibleIncome);
        }, this.product.growthTime);

        this.growAnimation();
        this.plot.onclick = (e) => this.harvest();
    };

    growAnimation() {
        const images = this.product.growImgs.slice();
        let { growthTime } = this.product;
        let land = this.land;
        (function f() {
            const image = images.shift();
            image && (land.src = image) && setTimeout(f, growthTime / 3);
        }())
    }

    harvest() {
        if (this.readyHarvest) {
            const readyProduct = {
                type: this.product.type,
                icon: this.product.icon,
                income: this.income,
                cost: this.product.cost
            };

            const isProduct = farm.storage.some(el => el.type === readyProduct.type);

            if (!isProduct) {
                farm.storage.push(readyProduct);
            } else {
                farm.storage.forEach(el => {
                    el.type === readyProduct.type && (el.income += readyProduct.income)
                })
            }
            this.readyHarvest = false;
            this.restorePlot();
            this.updateStorage();
            console.log("Grew " + this.income + " " + this.product.type);
        } else {
            console.log("Nothing to harvest!");
        }
    };

    restorePlot() {
        this.plot.className = "free_seed-plot";
        this.land.src = "./src/img/unit_land.png";
        this.plot.onclick = null;
    }
}
