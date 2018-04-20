import React from "react";

export default ({ icon, handlerClick, dragAndPlant }) => {
    return <img src={icon} onClick={handlerClick} onMouseDown={dragAndPlant} />
}