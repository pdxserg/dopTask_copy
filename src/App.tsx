import './App.css';
import {Todolist} from "./Todolist";
import {useReducer, useState} from "react";
import {v1} from "uuid";
import {AddTaskAC, removeTaskAC, tasksReduser} from "./model/tasksReduser";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

	// const [tasks, setTasks] = useState<TaskType[]>([
// 		{id: v1(), title: 'HTML&CSS', isDone: true},
// 		{id: v1(), title: 'JS', isDone: true},
// 		{id: v1(), title: 'ReactJS', isDone: false},
// 	])
	const [tasks, dispatchTasks] = useReducer(tasksReduser,[
		{id: v1(), title: 'HTML&CSS', isDone: true},
		{id: v1(), title: 'JS', isDone: true},
		{id: v1(), title: 'ReactJS', isDone: false},
	])


	const [filter, setFilter] = useState<FilterValuesType>('all')

	const removeTask = (taskId: string) => {
		dispatchTasks(removeTaskAC(taskId))
		// const filteredTasks = tasks.filter((task) => {
		// 	return task.id !== taskId
		// })
		// setTasks(filteredTasks)
	}

	const addTask = (title: string)=> {
		dispatchTasks(AddTaskAC(title))
		// const newTask = {
		// 	id: v1(),
		// 	title: title,
		// 	isDone: false
		// }
		// const newTasks = [newTask, ...tasks]
		// setTasks(newTasks)
	}

	const changeFilter = (filter: FilterValuesType) => {
		setFilter(filter)
	}

	let tasksForTodolist = tasks
	if (filter === 'active') {
		tasksForTodolist = tasks.filter(task => !task.isDone)
	}

	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(task => task.isDone)
	}

	return (
		<div className="App">
			<Todolist
				title="What to learn"
				tasks={tasksForTodolist}
				removeTask={removeTask}
				changeFilter={changeFilter}
				addTask={addTask}
			/>
		</div>
	);
}

export default App;
