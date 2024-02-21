import { useState } from "react";

function Form() {
	let [formData, setFormData] = useState({
		fullName: "",
		username: "",
	});

	let handleInputChange = (event) => {
		let fieldName = event.target.name;
		let newVal = event.target.value;

		setFormData((currData) => {
			// currData[fieldName] = newVal;
			return { ...currData, [fieldName]: newVal };
		});
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		setFormData({
			fullName: "",
			username: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="fullname">Full Name: </label>
			<input
				type="text"
				placeholder="enter full name"
				value={formData.fullName}
				id="fullname"
				onChange={handleInputChange}
				name="fullName"
			/>
			<button>Submit</button>
			<br />
			<br />
			<label htmlFor="username">User Name: </label>
			<input
				type="text"
				placeholder="enter username"
				value={formData.username}
				id="username"
				onChange={handleInputChange}
				name="username"
			/>
			<button>Submit</button>
		</form>
	);
}

export default Form;
