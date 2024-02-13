import { useState } from "react";

export default function TodoList() {
	let [todos, setTodos] = useState(["Sample task"]);
	let [newTodo, setNewTodo] = useState([""]);

	let addNewTask = () => {
		setTodos([...todos, newTodo]);
		setNewTodo("");
	};

	let updateTodoValue = (event) => {
		setNewTodo(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add a task"
				value={newTodo}
				onChange={updateTodoValue}
			/>
			<br /> <br />
			<button onClick={addNewTask}>Add task</button>
			<br />
			<br />
			<br />
			<h3>Tasks todo</h3>
			<ul>
				{todos.map((todo) => (
					<li>{todo}</li>
				))}
			</ul>
		</div>
	);
}
