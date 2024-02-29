import { useState } from "react";

export default function Joker() {
	let [joke, setJoke] = useState({});
	const URL = "https://official-joke-api.appspot.com/random_joke";

	let getNewJoke = async () => {
		let response = await fetch(URL);
		let jsonResponse = await response.json();
		// console.log(jsonResponse);
		setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
	};
	return (
		<div>
			<h1>Jokes!</h1>

			<h4>{joke.setup}</h4>
			<h4>{joke.punchline}</h4>

			<button onClick={getNewJoke}>New Joke</button>
		</div>
	);
}
