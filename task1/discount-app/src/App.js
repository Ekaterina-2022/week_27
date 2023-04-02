import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/discblock.css";
import DiscountBlock from "./components/discblock";

const discountVariants = [
	{
		name: "Безлимитный 300",
		price: 300,
		speed: 10,
		features: "Объем включенного трафика не ограничен",
		theme: "blue",
	},
	{
		name: "Безлимитный 450",
		price: 450,
		speed: 50,
		features: "Объем включенного трафика не ограничен",
		theme: "green",
	},
	{
		name: "Безлимитный 550",
		price: 550,
		speed: 100,
		features: "Объем включенного трафика не ограничен",
		theme: "red",
		isSelected: true,
	},
	{
		name: "Безлимитный 1000",
		price: 1000,
		speed: 200,
		features: "Объем включенного трафика не ограничен",
		theme: "dark",
	},
];

function App() {
	return (
		<div className="App">
			<div className="container">
				{discountVariants.map((Card) => (
					<DiscountBlock
						name={Card.name}
						price={Card.price}
						speed={Card.speed}
						features={Card.features}
						theme={Card.theme}
						isSelected={Card.isSelected}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
