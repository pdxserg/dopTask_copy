import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";


function App() {
	return (
		<div>
			<div className={styles.header}><h1>HEADER</h1></div>
			<div className={styles.body}>
				<div className={styles.nav}>
					<div><NavLink to={"/1"}>Adidas</NavLink></div>
					<div><NavLink to={"/2"}>Puma</NavLink></div>
					<div><NavLink to={"/3"}>Nick</NavLink></div>
					Здесь будет навигация
				</div>
				<div className={styles.content}>
					<Routes>
						<Route path ="/" element={<Navigate to={"/1"}/>}/>
						<Route element={<PageOne/>} path="/1"/>
						<Route element={<PageTwo/>} path="/2"/>
						<Route element={<PageThree/>} path="/3"/>

						<Route element={<Error404 />} path={"error404"}/>
						<Route path ="/*" element={<Navigate to={"error404"}/>}/>



					</Routes>

				</div>
			</div>
			<div className={styles.footer}>abibas 2023</div>
		</div>
	);
}


export default App;
