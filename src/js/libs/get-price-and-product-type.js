import { productsList } from "../product.js";

export default (e) => {
    const seedPrice = e.currentTarget.nextElementSibling.innerText;
    const seedSrc = e.currentTarget.src;
    const seedType = seedSrc.substring(seedSrc.lastIndexOf("/") + 1, seedSrc.lastIndexOf("-"));
    const purchasedSeed = productsList[seedType];
    return { seedPrice, purchasedSeed }
}