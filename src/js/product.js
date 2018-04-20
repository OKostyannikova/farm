import Farm from "./farm";

class Product {
    constructor(type, cost, growImgs, icon, possibleIncome, growthTime) {
        this.type = type;
        this.cost = cost;
        this.growImgs = growImgs;
        this.icon = icon;
        this.possibleIncome = possibleIncome;
        this.growthTime = growthTime;
    }
}

const tomato = new Product("tomato", 3, ["./src/img/tomato_1.png", "./src/img/tomato_2.png", "./src/img/tomato_3.png"], "./src/img/tomato-icon.png", 5, 6000),
    potato = new Product("potato", 3, ["./src/img/potato_1.png", "./src/img/potato_2.png", "./src/img/potato_3.png"], "./src/img/potato-icon.png", 5, 6000),
    pumkin = new Product("pumkin", 10, ["./src/img/pumkin_1.png", "./src/img/pumkin_2.png", "./src/img/pumkin_3.png"], "./src/img/pumkin-icon.png", 2, 6000),
    watermelon = new Product("watermelon", 10, ["./src/img/watermelon_1.png", "./src/img/watermelon_2.png", "./src/img/watermelon_3.png"], "./src/img/watermelon-icon.png", 2, 6000),
    salad = new Product("salad", 10, ["./src/img/salad_1.png", "./src/img/salad_2.png", "./src/img/salad_3.png"], "./src/img/salad-icon.png", 2, 6000),
    strawberry = new Product("strawberry", 3, ["./src/img/strawberry_1.png", "./src/img/strawberry_2.png", "./src/img/strawberry_3.png"], "./src/img/strawberry-icon.png", 5, 6000);

const products = [tomato, potato, pumkin, watermelon, salad, strawberry];
const productsList = {
    tomato,
    potato,
    pumkin,
    watermelon,
    salad,
    strawberry
}

const farm = new Farm(products, products);
export {
    farm,
    productsList
}