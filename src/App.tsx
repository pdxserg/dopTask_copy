import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType ={
	id: string, title: string, filter: FilterValuesType
}
function App() {

	// let [tasks, setTasks] = useState([
	// 	{id: v1(), title: "HTML&CSS", isDone: true},
	// 	{id: v1(), title: "JS", isDone: true},
	// 	{id: v1(), title: "ReactJS", isDone: false},
	// 	{id: v1(), title: "Rest API", isDone: false},
	// 	{id: v1(), title: "GraphQL", isDone: false},
	// ]);
	// let [filter, setFilter] = useState<FilterValuesType>("all");

	let todolistID1=v1();
	let todolistID2=v1();

	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
	    {id: todolistID1, title: 'What to learn', filter: 'all'},
	    {id: todolistID2, title: 'What to buy', filter: 'all'},
	])

	let [tasks, setTasks] = useState({
	    [todolistID1]:[
	        {id: v1(), title: "HTML&CSS", isDone: true},
	        {id: v1(), title: "JS!!!", isDone: true},
	        {id: v1(), title: "ReactJS", isDone: false},
	        {id: v1(), title: "Rest API", isDone: false},
	        {id: v1(), title: "GraphQL", isDone: false},
	    ],
	    [todolistID2]:[
	        {id: v1(), title: "HTML&CSS2", isDone: true},
	        {id: v1(), title: "JS2", isDone: true},
	        {id: v1(), title: "ReactJS2", isDone: false},
	        {id: v1(), title: "Rest API2", isDone: false},
	        {id: v1(), title: "GraphQL2", isDone: false},
	    ]
	 });

	 //console.log(tasks[todolistID1][1].title) //выведет--->JS!!!❗️
	//console.log([todolistID1]:tasks[todolistID1].filter(el => el.title !== "GraphQL")) //❗️выведет(4)[{…}, {…}, {…}, {…}]
	//let x="a1"
	// let y="a2"
	//
	//
	// let a= {
	// 	[x]:[{ww:1, ee: 'hey'},{ww:2, ee: 'Ops'}],
	// 	[y]:[{ww:2, ee: 'ho'}]
	// }
	// console.log(a[y][0].ee)
	function removeTask(todolistId: string,id: string) {
		setTasks({...tasks,[todolistId]:tasks[todolistId].filter((el)=>el.id !== id)})//❗️️❗️❗️❗️
		// let filteredTasks = tasks.filter(t => t.id != id);
		// setTasks(filteredTasks);
	}

	function addTask(todolistId: string, title: string) {
		 let task = {id: v1(), title: title, isDone: false};

		setTasks({...tasks,[todolistId]:[task, ...tasks[todolistId], ]})
		// let newTasks = [task, ...tasks];
		// setTasks(newTasks);
	}

	function changeStatus(taskId: string, isDone: boolean) {
		// let task = tasks.find(t => t.id === taskId);
		// if (task) {
		// 	task.isDone = isDone;
		// }
		//
		// setTasks([...tasks]);
	}




	function changeFilter(todolistId: string, value: FilterValuesType) {
		setTodolists(todolists.map(el=> el.id===todolistId ? {...el, filter:value} :el))

	// const currentTodolist= todolists.find(el => el.id  === todolistId)
	// 	if(currentTodolist){
	// 		currentTodolist.filter = value
	// 		console.log(currentTodolist)
	// 	setTodolists([...todolists])
	// 	}
	//
	}


	return (
		<div className="App">
			{todolists.map(el => {
				let tasksForTodolist = tasks[el.id];

				if (el.filter === "active") {
					tasksForTodolist = tasks[el.id].filter (t => t.isDone === false);
				}
				if (el.filter === "completed") {
					tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
				}
				return (
					<Todolist
						key={el.id}
						title={el.title}
						todolistId={el.id}
						tasks={tasksForTodolist}
						removeTask={removeTask}
						changeFilter={changeFilter}
						addTask={addTask}
						changeTaskStatus={changeStatus}
						filter={el.filter}
					/>
				)
			})}


		</div>
	);
}

export default App;
