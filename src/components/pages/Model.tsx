import React from "react"
import {  adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


const models = adidasArr


export const Model = () => {
	const params = useParams()
	console.log(params)
	let description = adidasArr.find(m =>m.id === params.id )
	// debugger
	return (
		<div>
			<h2>{description ? description.model : "Nothig here"}</h2>
			{/*<h2>{models[Number(params.id) - 1]?models[Number(params.id) - 1].model: 'eeee'}</h2>*/}
			<h2>{description?.price }</h2>
			<img src={description?.picture}
			     alt={description?.model}
			     style={{marginRight: "15px", width:description? "500px":"", height:description? "500px":""}}/>

		</div>


	)
}

