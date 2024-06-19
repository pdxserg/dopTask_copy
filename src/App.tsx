import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Nike} from "./components/pages/Nike";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {NavWrapper} from "./_styles";

const PATH = {
	PAGE1: '/page1',
	PAGE2: '/page2',
	PAGE3: '/page3',
	ERROR404: '/page/error404'
} as const

function App() {
	return (
		<div>
			<div className={styles.header}><h1>HEADER</h1></div>
			<div className={styles.body}>
				<div className={styles.nav}>
					<NavWrapper><NavLink to={PATH.PAGE1}
						// className={({isActive})=>isActive? styles.active :styles.noactive}
					>Adidas</NavLink></NavWrapper>
					<NavWrapper><NavLink to={PATH.PAGE2}
						// className={({isActive})=>isActive? styles.active:styles.noactive}
					>Puma</NavLink></NavWrapper>
					<NavWrapper><NavLink to={PATH.PAGE3}
						// className={({isActive})=>isActive? styles.active:styles.noactive}
					>Nick</NavLink></NavWrapper>

				</div>
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<Navigate to={PATH.PAGE1}/>}/>
						<Route element={<Adidas/>} path={PATH.PAGE1}/>
						<Route element={<Puma/>} path={PATH.PAGE2}/>
						<Route element={<Nike/>} path={PATH.PAGE3}/>

						<Route  path="/*" element={<Error404/>}> </Route>

						{/*<Route path="/*" element={<Navigate to={PATH.ERROR404}/>}/>*/}
						{/*<Route element={<Error404/>} path={PATH.ERROR404}/>*/}

					</Routes>

				</div>
			</div>
			<div className={styles.footer}>abibas 2023</div>
		</div>
	);
}


export default App;

