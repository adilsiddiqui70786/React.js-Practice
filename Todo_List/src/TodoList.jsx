import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoList() {
	let [todos, setTodos] = useState([
		{ task: "Sample task", id: uuidv4(), isDone: false },
	]);
	let [newTodo, setNewTodo] = useState([""]);

	let addNewTask = () => {
		setTodos((prevVal) => {
			return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
		});
		setNewTodo("");
	};

	let updateTodoValue = (event) => {
		setNewTodo(event.target.value);
	};

	let deleteTodo = (id) => {
		setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
	};

	let MarksAsDoneAll = () => {
		setTodos((prevVal) =>
			prevVal.map((todo) => {
				return {
					...todo,
					isDone: true,
				};
			})
		);
	};

	let MarksAsDoneOne = (id) => {
		setTodos((prevVal) =>
			prevVal.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						isDone: true,
					};
				} else {
					return todo;
				}
			})
		);
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
							<span
								style={
									todo.isDone ? { textDecorationLine: "line-through" } : {}
								}>
								{todo.task}
							</span>
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
							&nbsp;&nbsp;&nbsp;&nbsp;
							<button
								onClick={() => MarksAsDoneOne(todo.id)}
								style={{
									backgroundColor: "green",
									width: "150px",
									height: "25px",
									padding: "0px",
								}}>
								Marks As Done
							</button>
						</span>
					</li>
				))}
			</ul>
			<br />
			<br />
			<br />
			<button onClick={MarksAsDoneAll}>Mark As Done All</button>
		</div>
	);
}
