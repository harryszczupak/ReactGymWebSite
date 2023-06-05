import './App.css';
import Head from './Head';
import MainBanner from './MainBanner';
import Offers from './offers';
import About from './About';
function App() {
	return (
		<div className='container'>
			<div className='top-elements'>
				<Head></Head>
				<MainBanner></MainBanner>
			</div>
			<div className='About-section' id='info-panel'>
				<About></About>
			</div>
			<div id='offers-section' className='mid-elements'>
				<Offers></Offers>
			</div>
		</div>
	);
}

export default App;
