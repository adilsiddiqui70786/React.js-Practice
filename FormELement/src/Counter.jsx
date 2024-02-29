import { useEffect, useState } from "react";

export default function Counter() {
	let [countInc, setCountInc] = useState(0);
	let [countDec, setCountDec] = useState(0);

	let incCount = () => {
		setCountInc((currCount) => currCount + 1);
	};

	let DecCount = () => {
		setCountDec((currCount) => currCount - 1);
	};

	useEffect(
		function printSomething() {
			console.log("I am side-effect");
		},
		[countInc]
	);

	return (
		<div>
			<h3>Count = {countInc}</h3>
			<button onClick={incCount}>+1</button>
			<br />
			<h3>Count = {countDec}</h3>
			<button onClick={DecCount}>-1</button>
		</div>
	);
}
