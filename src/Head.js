import logo from './Photos/logo.jpg';
import './Head.css';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const Head = () => {
	const MyRef = useRef();
	console.log(MyRef.current);

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
						<Link to='/'>O nas</Link>
					</li>
					<li>
						<Link to='/Register'>Zarejestruj się</Link>
					</li>
					<li>
						<Link>Cennik</Link>
					</li>
					<li>
						<Link to='/Gallery'>Galeria</Link>
					</li>
					<li>
						<Link>Kontakt</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Head;
