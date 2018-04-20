import React from "react";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.resourseId = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
    }

    render() {
        return <div id="field">
            <ul id="land-grid">
                {this.resourseId.map((el) => <li id={el} key={el} className="free_seed-plot">
                    <img src="./src/img/unit_land.png" />
                </li>)}
            </ul>
        </div>
    }
}