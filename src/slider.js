import './slider.css';
import { useState, useRef, useEffect } from 'react';
import Photo from './Photos/13.jpg';
import InPhoto from './Photos/15.jpg';
import IsecPhoto from './Photos/28.jpg';
import WsecPhoto from './Photos/30.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = () => {
	const myRef = useRef();
	const [VisibleElement, setIsVisible] = useState(false);
	useEffect(() => {
		const obesrver = new IntersectionObserver((entry) => {
			entry.forEach((el) => {
				if (el.isIntersecting) {
					setIsVisible(true);
					obesrver.unobserve(el.target);
				}
			});
		}, []);
		obesrver.observe(myRef.current);
	}, []);
	let [slideIndex, SetSlideIndex] = useState(0);
	const PhotoTable = [Photo, InPhoto, IsecPhoto, WsecPhoto];
	const ChangeSlideRight = () => {
		if (slideIndex == PhotoTable.length - 1) {
			SetSlideIndex(0);
		} else {
			SetSlideIndex((slideIndex += 1));
		}
	};
	const ChangeSlideLeft = () => {
		if (slideIndex == 0) {
			SetSlideIndex(PhotoTable.length - 1);
		} else {
			SetSlideIndex((slideIndex -= 1));
		}
	};
	return (
		<div className='gallery-container'>
			<div
				ref={myRef}
				className={`main-gallery ${VisibleElement ? 'visible' : null}`}
				style={{ backgroundImage: `url(${PhotoTable[slideIndex]})` }}>
				<div className='Arrows'>
					<IoIosArrowBack size={50} onClick={ChangeSlideLeft}></IoIosArrowBack>
					<IoIosArrowForward
						size={50}
						onClick={ChangeSlideRight}></IoIosArrowForward>
				</div>
			</div>
		</div>
	);
};
export default Slider;
