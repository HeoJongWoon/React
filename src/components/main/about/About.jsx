import './About.scss';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function About() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
	};
	const [Post, setPost] = useState(getLocalData());

	useEffect(() => {
		setPost(getLocalData());
	}, []);

	return (
		<section className='about myScroll'>
			<h2>About</h2>
			<div className='box'>
				<>
					<Swiper
						slidesPerView={5}
						spaceBetween={0}
						centeredSlides={true}
						loop={true}
						pagination={{
							clickable: true,
						}}
						className='mySwiper'
					>
						<div className='Swipers'>
							<SwiperSlide>
								<img src='/img/code1.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code2.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code3.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code4.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code5.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code6.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code7.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code8.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code9.jpg' alt='' />
							</SwiperSlide>
						</div>
					</Swiper>
				</>
				<p className='tit'>Lorem ipsum dolor sit amet.</p>
				<p className='txt'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, neque totam aliquam, eligendi esse cum corrupti enim sunt ut obcaecati veniam
					praesentium illum laboriosam voluptatibus?
				</p>
			</div>
		</section>
	);
}

export default About;
