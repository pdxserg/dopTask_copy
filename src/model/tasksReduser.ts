import {TaskType} from "../App";





// type AactionsType=
export const tasksReduser= (state: TaskType [], action: any):TaskType []=>{

	switch (action.type){
		case "WWW":{
			return state
		}
		default:
			throw new Error("WWW")
	}

}

export const removeTaskAC=(id:string)=>{
	return{
		type:"",
		payload:{
			id
		}
	} as const
}
export const AddTaskAC=(title:string)=>{
	return{
		type:"",
		payload:{
			title
		}
	} as const
}
