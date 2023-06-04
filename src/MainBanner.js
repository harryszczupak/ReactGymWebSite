import Photo from './Photos/osiłek.png';
import './Main.css';

import { useState, useEffect } from 'react';
const Banner = () => {
	const [add, Setadd] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			Setadd(true);
		}, 500);
	}, []);

	return (
		<main>
			<aside className={`${add ? 'loaded' : null}`}>
				<h1>ZBUDUJ SYLWETKĘ MARZEŃ</h1>
				<span>
					"Dziś zrób to czego innym sie nie chce jutro miej czego pragną"
				</span>
			</aside>
			<section>
				<img src={Photo} className={`${add ? 'loaded' : null} siłacz`}></img>
				<div className='triangle triangle-1'></div>
				<div className='triangle triangle-2'></div>
				<div className='triangle triangle-3'></div>
			</section>
		</main>
	);
};
export default Banner;
