import React, {useState} from "react";
import "./button.css"


export default function Button(props) {
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }
    return (
<button {...props} className="btn__choose" onClick={handleChange}>{pressed ? "Выбрано" : "Выбрать"}</button>
    )
}