import './offers.css';
import { useInView } from 'react-hook-inview';
const Offers = () => {
	const [ref, isVisible] = useInView();

	const plans = [
		{ title: 'Siłownia Half', price: '109,99PLN', id: 1 },
		{ title: 'Siłownia ', price: '139,99PLN', id: 2 },
		{ title: 'Karnet 3-MC Siłownia', price: '349,99PLN', id: 3 },
		{ title: 'Karnet 3-MC Siłownia', price: '679,99PLN', id: 4 },
	];
	return (
		<div ref={ref} className={`offers-panel ${isVisible ? 'observe' : null}`}>
			<section>
				{plans.map((el) => (
					<div className={`offers-option`} key={el.id}>
						<nav>
							<h2>{el.title}</h2>
							<span>{el.price}</span>
						</nav>

						<button>Wybierz</button>
					</div>
				))}
			</section>
		</div>
	);
};
export default Offers;
