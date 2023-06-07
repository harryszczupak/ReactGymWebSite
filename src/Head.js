import logo from './Photos/logo.jpg';
import './Head.css';
import { useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Head = () => {
	const MyRef = useRef();

	return (
		<header>
			<nav className='top-menu'>
				<img src={logo}></img>
				<div className='hamburger-menu'>
					<div className='hamburger-menu-line'></div>
					<div className='hamburger-menu-line'></div>
					<div className='hamburger-menu-line'></div>
				</div>

				<ul>
					<li>
						<Link to='/#info-panel'>O nas</Link>
					</li>
					<li>
						<a>Zarejestruj się</a>
					</li>
					<li>
						<Link to='/#offers-section'>Cennik</Link>
					</li>
					<li>
						<Link to='/#gallery-section'>Galeria</Link>
					</li>
					<li>
						<a>Kontakt</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Head;
