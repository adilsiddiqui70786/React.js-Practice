import "./Card.css";

function Card({ title, price, features }) {
	// const list = features.map((item) => <li>{item}</li>);
	let style = { backgroundColor: "yellow" };
	let isDiscount = price > 30000;
	let discountStyle = { backgroundColor: isDiscount ? "pink" : "" };
	return (
		<div className="Card" style={discountStyle}>
			<h1 style={style} id="title">
				{title}
			</h1>
			<p className="desc"> {price}</p> <br />
			{isDiscount && <p>"Discount of 5%"</p>}
		</div>
	);
}
export default Card;
