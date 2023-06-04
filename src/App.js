import logo from './logo.svg';
import './App.css';
import Head from './Head';
import MainBanner from './MainBanner';
import Offers from './offers';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<div className='container'>
						<div className='top-elements'>
							<Head></Head>
							<MainBanner></MainBanner>
						</div>
						<div className='mid-elements'>
							<Offers></Offers>
						</div>
					</div>
				}></Route>
		</Routes>
	);
}

export default App;
