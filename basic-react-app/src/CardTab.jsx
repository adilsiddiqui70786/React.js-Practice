import Card from "./Card.jsx";

function CardTab() {
	// let options = ["4GB RAM", "64GB Storage", "12MP Camera"];

	return (
		<>
			<Card title="Phone" price={2300} />
			<Card title="Laptop" price={78000} />
			<Card title="Headset" price={800} />
		</>
	);
}

export default CardTab;
