import React from "react"
import {  adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


const models = adidasArr


export const Model = () => {
	const params = useParams()
	console.log(params)
	let der = adidasArr.find(m =>m.id === params.id )
	debugger
	return (
		<div>
			{/*<h2>{der? der.model: "jjjj"}</h2>*/}
			<h2>{models[params.id].price}</h2>
			{/*<h2>{models[Number(params.id) - 1].collection}</h2>*/}
			{/*<img src={models[Number(params.id) - 1].picture}*/}
			{/*      alt ={models[Number(params.id) - 1].model}*/}
			{/*     style={{marginRight: "15px", width: "500px", height: "500px"}}/>*/}

		</div>


	)
}

