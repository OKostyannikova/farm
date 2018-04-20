import React from "react";
import SeedIcon from "./seed-icon.jsx";
import SeedAmong from "./seed-among.jsx";
import dragNDrop from "../libs/drag-manager.js";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.inventory = this.props.inventory;
        this.dragAndPlant = this.dragAndPlant.bind(this);
    }
    
    dragAndPlant(e) {
        dragNDrop(e, this.props.updateInventory, this.props.updateStorage);
    }


    render() {
        return <div id="inventory">
            {this.inventory.map(el => <div key={el.type}>
                <SeedIcon icon={el.icon} handlerClick={null} dragAndPlant={this.dragAndPlant} />
                <SeedAmong among={el.among} />
            </div>)}
        </div>
    }
}