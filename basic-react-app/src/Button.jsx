import React from "react";

function PrintHello() {
	console.log("Hello React");
}

function PrintBye(name) {
	console.log("Bye", name);
}

function handleDoubleClick() {
	console.log("You doubled clicked");
}

export default function Button({ name }) {
	return (
		<div>
			<button onClick={PrintHello}>Click me!</button>
			<button onClick={() => PrintBye(name)}>Bye</button>
			<p onMouseOver={PrintHello}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
				velit itaque, odio voluptatum provident vel alias facere, hic, eligendi
				voluptate sed. Quas obcaecati quasi ipsa rerum libero aut excepturi
				eligendi.
			</p>

			<button onDoubleClick={handleDoubleClick}>Click</button>
		</div>
	);
}
