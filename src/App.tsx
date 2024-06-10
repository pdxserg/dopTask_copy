import React from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {NavWrapper} from "./_styles";

 const PATH ={
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
						<Route element={<PageOne/>} path={PATH.PAGE1}/>
						<Route element={<PageTwo/>} path={PATH.PAGE2}/>
						<Route element={<PageThree/>} path={PATH.PAGE3}/>


						<Route path="/*" element={<Navigate to={PATH.ERROR404} />}/>
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

