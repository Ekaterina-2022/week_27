import React from "react";
import "./App.css";
import "./components/discblock.css";
import DiscountBlock from "./components/discblock";
import discountVariants from "./components/discountData";
import Button from "./components/button";

function App() {
	return (
		<div className="App">
			<div className="container">
				{discountVariants.map((Card) => (
					<DiscountBlock
						key={Card.id}
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
