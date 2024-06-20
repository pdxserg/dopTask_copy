import React from "react"
import {  adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


const models = adidasArr


export const Model = () => {
	const params = useParams()
	console.log(params)
	let der = adidasArr.find(m =>m.id === params.id )
	// debugger
	return (
		<div>
			<h2>{der ? der.model : "Nothig here"}</h2>
			{/*<h2>{models[Number(params.id) - 1]?models[Number(params.id) - 1].model: 'eeee'}</h2>*/}
			<h2>{der?.price }</h2>
			<img src={der?.picture}
			     alt={der?.model}
			     style={{marginRight: "15px", width: "500px", height: "500px"}}/>

		</div>


	)
}

