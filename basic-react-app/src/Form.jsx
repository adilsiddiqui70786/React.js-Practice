function handleFormSubmit(event) {
	event.preventDefault();
	console.log("Form was submitted");
}

export default function from() {
	return (
		<form action="">
			<input placeholder="Write something" />
			<button onClick={handleFormSubmit}>Submit</button>
		</form>
	);
}
