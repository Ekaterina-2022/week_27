import React from "react";

class Rate extends React.Component {
    render() {
        const {price} = this.props;
        return (
        <div className="price">{price}</div>
        
        )
    }
}
export default Rate;