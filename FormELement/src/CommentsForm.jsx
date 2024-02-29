import { useState } from "react";

export default function CommentsForm() {
	let [formData, setFormData] = useState({
		username: "",
		remarks: "",
		rating: "",
	});

	let handleInput = (event) => {
		setFormData((currData) => {
			return { ...currData, [event.target.name]: event.target.value };
		});
	};

	let handleSubmit = (event) => {
		console.log(formData);
		event.preventDefault();
		setFormData({
			username: "",
			remarks: "",
			rating: "",
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input
					onChange={handleInput}
					type="text"
					placeholder="username"
					value={formData.username}
					id="username"
					name="username"
				/>
				<br />
				<br />
				<label htmlFor="remarks">Comments: </label>
				<textarea
					onChange={handleInput}
					placeholder="add few remarks"
					name="remarks"
					id="remarks"
					cols="30"
					rows="10"
					value={formData.remarks}>
					Remarks
				</textarea>
				<br />
				<br />
				<label htmlFor="rating">Rating: </label>
				<input
					id="rating"
					name="rating"
					min={1}
					max={5}
					type="number"
					placeholder="rating"
					value={formData.rating}
					onChange={handleInput}
				/>
				<br /> <br />
				<button>Add Comment</button>
			</form>
		</div>
	);
}
