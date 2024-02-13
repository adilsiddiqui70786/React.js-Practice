import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoList() {
	let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
	let [newTodo, setNewTodo] = useState([""]);

	let addNewTask = () => {
		setTodos((prevVal) => {
			return [...todos, { task: newTodo, id: uuidv4() }];
		});
		setNewTodo("");
	};

	let updateTodoValue = (event) => {
		setNewTodo(event.target.value);
	};

	let deleteTodo = (id) => {
		setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
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
					<li style={{ marginBottom: "10px" }} key={todo.id}>
						<span>
							{todo.task}
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button
								onClick={() => deleteTodo(todo.id)}
								style={{
									backgroundColor: "red",
									width: "80px",
									height: "25px",
									padding: "0px",
								}}>
								Delete
							</button>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
