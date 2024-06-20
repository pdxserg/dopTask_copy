import React from "react"
import {adidasArr, SnikersItem} from "./Adidas";
import {useParams} from "react-router-dom";


const models = adidasArr
type ModelPropsType = {
	array: SnikersItem[]
}

export const Model = (props: ModelPropsType) => {
	const params = useParams()
	console.log(params)
	let description = props.array.find(m => m.id === params.id)
	// debugger
	return (
		<div>
			{description
				? <div>
					<h2>{description.model}</h2>
					<h2>{description.price}</h2>
					<img src={description.picture}
					     alt={description.model}
					     style={{marginRight: "15px", width: "500px", height: "500px"}}/>
				</div>


				: <p>"Nothig here"</p>

			}


	{/*		<h2>{description ? description.model : "Nothig here"}</h2>*/}
	{/*		/!*<h2>{models[Number(params.id) - 1]?models[Number(params.id) - 1].model: 'eeee'}</h2>*!/*/}
	{/*		<h2>{description?.price}</h2>*/}
	{/*<img src={description?.picture}*/}
	{/*     alt={description?.model}*/}
	{/*     style={{marginRight: "15px", width: description ? "500px" : "", height: description ? "500px" : ""}}/>*/}

</div>


)
}

