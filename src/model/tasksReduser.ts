import {TaskType} from "../App";






export const tasksReduser= (state: TaskType [], action: AactionsType):TaskType []=>{

	switch (action.type){
		case "REMOVE-TASK":{
			return state
		}
		case "ADD-TASK":{
			return state
		}

		default:
			throw new Error("WWW")
	}

}
type AactionsType=RemovetaskType|AddtaskType

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
