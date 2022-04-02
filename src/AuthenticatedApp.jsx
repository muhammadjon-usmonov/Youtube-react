import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './Components/Header/Header';
import Cannel from './Components/Cannel/Cannel';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Video from './Components/Video/Video';

function AuthenticatedApp() {
	
	return (
		<>
			<div className='container'>
				<Header/>
				<div className='center'>
					<Search/>
					<Routes>
						<Route path='/' element={<Navigate to='/home' />} />
						<Route path='/channel' element={<Cannel />} />
						<Route path='/Home' element={<Home />} />
						<Route path='/video' element={<Video />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default AuthenticatedApp;
