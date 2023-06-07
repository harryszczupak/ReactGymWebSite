import './App.css';
import Head from './Head';
import MainBanner from './MainBanner';
import Offers from './offers';
import About from './About';
import Slider from './slider';
import { Parallax } from 'react-parallax';
import GymBG from './Photos/gymBG.jpg';
function App() {
	return (
		<div className='container'>
			<div className='top-elements'>
				<Head></Head>
				<MainBanner></MainBanner>
			</div>
			<Parallax strength={500} bgImage={GymBG}>
				<div className='content'>
					<div className='text-content'>cos tam</div>
				</div>
			</Parallax>
			<div className='About-section' id='info-panel'>
				<About></About>
			</div>
			<Parallax strength={600} bgImage={GymBG}>
				<div className='content'>
					<div className='text-content'>cos tam</div>
				</div>
			</Parallax>

			<div id='offers-section' className='mid-elements'>
				<Offers></Offers>
			</div>
			<div id='gallery-section' className='gallery-elements'>
				<Slider></Slider>
			</div>
		</div>
	);
}

export default App;
