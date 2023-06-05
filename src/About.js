import './about.css';
import fitnesiara from './Photos/fitnesiara.png';
import { useInView } from 'react-hook-inview';
const About = () => {
	const [ref, isVisible] = useInView();
	return (
		<section ref={ref} className={`info ${isVisible ? 'loaded' : null}`}>
			<aside>
				<span>
					Centrum Modelowania Sylwetki Fitness Factory to idealne miejsce na
					pracowanie nad swoim ciałem, na najnowszym i najbardziej innowacyjnym
					sprzęcie. Posiadamy ponad 1200m2 powierzchni podzielonej na strefę
					półwolnych ciężarów, wolnych ciężarów, strefę cardio oraz strefę
					kobiet. Ponadto jest to jedyne miejsce na Podhalu gdzie poza
					treningiem posiadamy szeroki wachlarz zabiegów wyszczuplających,
					redukujących cellulit, modelujących sylwetkę, po których na nowo
					pokochasz swoje ciało. Wiedza i doświadczenie trenerów i kosmetologów
					oraz nowoczesny sprzęt i wyjątkowa atmosfera to dla naszych klientów
					gwarancja sukcesu.
				</span>
				<div className='fancy-bg-cover'></div>
			</aside>
			<img src={fitnesiara}></img>
		</section>
	);
};
export default About;
