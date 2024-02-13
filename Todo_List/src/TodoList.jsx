import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoList() {
	let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
	let [newTodo, setNewTodo] = useState([""]);

	let addNewTask = () => {
		setTodos([...todos, { task: newTodo, id: uuidv4() }]);
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
					<li key={todo.id}>{todo.task}</li>
				))}
			</ul>
		</div>
	);
}
