import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import styled from "styled-components";


function App() {
	return (
		<div>
			<div className={styles.header}><h1>HEADER</h1></div>
			<div className={styles.body}>
				<div className={styles.nav}>
					<NavWrapper><NavLink to={"/1"}
					                      // className={({isActive})=>isActive? styles.active :styles.noactive}
					>Adidas</NavLink></NavWrapper>
					<NavWrapper><NavLink to={"/2"}
					              // className={({isActive})=>isActive? styles.active:styles.noactive}
					>Puma</NavLink></NavWrapper>
					<NavWrapper><NavLink to={"/3"}
					              // className={({isActive})=>isActive? styles.active:styles.noactive}
					>Nick</NavLink></NavWrapper>

				</div>
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<Navigate to={"/1"}/>}/>
						<Route element={<PageOne/>} path="/1"/>
						<Route element={<PageTwo/>} path="/2"/>
						<Route element={<PageThree/>} path="/3"/>

						<Route element={<Error404/>} path={"error404"}/>
						<Route path="/*" element={<Navigate to={"error404"}/>}/>


					</Routes>

				</div>
			</div>
			<div className={styles.footer}>abibas 2023</div>
		</div>
	);
}


export default App;

const NavWrapper= styled.div`
    margin-left: 10px;
    font-size: 20px;
	
	& > a {
		text-decoration: none;
		color: #61dafb;
	}
	& > a:hover {
		color: steelblue;
	}

`