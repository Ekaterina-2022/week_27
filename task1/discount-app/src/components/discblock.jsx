import React from "react";
import "./discblock.css";
//import Rate from "./rate";



class DiscountBlock extends React.Component {
    render() {
        const {name, price, speed, features, theme, isSelected} = this.props;
        return (
            <div className={[`card-${theme}`] + (isSelected ? "_selected" : "")}>
    <h2>{name}</h2>
    <div className="price">
        <div><p>{`руб ${price} /мес`}</p></div>
    </div>
    <div>до {speed} Мбит/сек</div>
    <div>{features}</div>
    </div>
        )
    }
}

export default DiscountBlock;