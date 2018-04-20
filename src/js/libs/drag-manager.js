import PriceAndProductType from "./get-price-and-product-type.js";
import Resourse from "../resource.js";

export default function (e, updateInventory, updateStorage) {
    if (e.nativeEvent.which == 3) {
        return;
    }
    const dragObject = e.currentTarget.cloneNode();
    const { purchasedSeed: product } = PriceAndProductType(e);
    document.onmousemove = function (e) {
        dragObject.style.position = 'absolute';
        dragObject.style.width = '60px';
        moveAt(e, dragObject);
        document.body.appendChild(dragObject);
        dragObject.style.zIndex = 1000;
        moveAt(e, dragObject);


        dragObject.ondragstart = function () {
            return false;
        };

        dragObject.onmouseup = function () {
            let plot = findDroppable(e, dragObject);
            if (plot) {
                let resouse = new Resourse(plot, product);
                resouse.plant(updateStorage);
                updateInventory();
            }
            document.onmousemove = null;
            dragObject.onmouseup = null;
            document.body.removeChild(dragObject);
        }
    }

    e.currentTarget.onmouseup = function () {
        document.onmousemove = null;
    }
}

function moveAt(e, dragObject) {
    dragObject.style.left = e.pageX - dragObject.offsetWidth / 2 + 'px';
    dragObject.style.top = e.pageY - dragObject.offsetHeight / 2 + 'px';
}

function findDroppable(e, dragObject) {
    dragObject.hidden = true;
    var elem = document.elementFromPoint(e.clientX, e.clientY);
    dragObject.hidden = false;
    if (elem == null) {
        return null;
    }
    return elem.closest('.free_seed-plot');
}