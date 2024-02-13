import { useState } from "react";

function init() {
	return Math.random();
}

export default function Counter() {
	const [count, setCount] = useState(init); // initialisation

	console.log("Componentis rendered");

	function incCount() {
		// setCount(count + 1);
		// // console.log(count);
		setCount((currVal) => {
			return currVal + 1;
		});
		setCount((currVal) => {
			return currVal + 1;
		});
	}

	return (
		<>
			<h3>Count = {count}</h3>
			<button onClick={incCount}>Increased Count</button>
		</>
	);
}
