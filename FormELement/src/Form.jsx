import { useState } from "react";

function Form() {
	let [fullName, setFullName] = useState("Adil");

	let handleNameChange = (event) => {
		setFullName(event.target.value);
	};

	return (
		<form>
			<input
				type="text"
				placeholder="enter full name"
				value={fullName}
				onChange={handleNameChange}
			/>
			<button>Submit</button>
		</form>
	);
}

export default Form;
