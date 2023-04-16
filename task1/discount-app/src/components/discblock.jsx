import React from "react";
import "./discblock.css";
import Button from "./button";
//import Rate from "./rate";



class DiscountBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            selected: false
        }
    }

    handleChoosen = () => {
        this.setState({ pressed: !this.state.pressed,
           
        });
    }

    handleChange = () => {
        this.setState({ selected: !this.state.selected})
    }

    render() {
        const {name, price, speed, features, theme, id} = this.props;
        return (
            <div id={id} onClick={this.handleChoosen} className={[`card-${theme}`] + (this.state.pressed ? "_selected" : "")}>
    <h2>{name}</h2>
    <div className="price">
        <div><p>{`руб ${price} /мес`}</p></div>
    </div>
    <div>до {speed} Мбит/сек</div>
    <div>{features}</div>
  <Button onClick={this.handleChoosen}>{this.state.pressed ? "Выбрано" : "Выбрать"}</Button>
    </div>
        )
    }
}

export default DiscountBlock;