import {FilterValuesType, TaskType} from "../App";
import {v1} from "uuid";






export const tasksReduser= (state: TaskType [], action: AactionsType):TaskType []=>{

	switch (action.type){
		case "REMOVE-TASK":{
			return state.filter((task) => {
				return task.id !== action.payload.id
			})

		}
		case "ADD-TASK":{

			const newTask = {
					id: v1(),
					title: action.payload.title,
					isDone: false
				}
			return [newTask, ...state]

		}
		case "FILTER":{
			return
		}


		default:
			throw new Error("WWW")
	}

}
type AactionsType=RemovetaskType|AddtaskType|ChangeFilterType

type RemovetaskType= ReturnType<typeof removeTaskAC>
type AddtaskType= ReturnType<typeof AddTaskAC>
export const removeTaskAC=(id:string)=>{
	return{
		type:"REMOVE-TASK",
		payload:{
			id
		}
	} as const
}
export const AddTaskAC=(title:string)=>{
	return{
		type:"ADD-TASK",
		payload:{
			title
		}
	} as const
}
type ChangeFilterType = ReturnType<typeof changeFilterAC>
export const changeFilterAC=(filter: FilterValuesType)=>{
	return{
		type:"FILTER",
		payload:{
			filter
		}

	} as const
}