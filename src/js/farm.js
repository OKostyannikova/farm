export default class Farm {
    constructor(products, storage) {
        this.shop = products;
        this.storage = [];
        this.coins = 100;
        this.inventory = [];
    }

    sellProducts() {
        this.storage.forEach((product) => {
            this.coins += product.cost * product.income;
        });
        this.storage.length = 0;
    }
}


