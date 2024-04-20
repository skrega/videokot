import React from 'react'
import { Pagination, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'
import cn from 'classnames'
import Image from 'next/image'
import s from './HomeResolution.module.scss'

const HomeResolution = ({ slider, title, items }) => {
	const imgPath = process.env.NEXT_PUBLIC_API

	const swiperParams = {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Pagination, EffectFade],
		pagination: {
			el: '.quality-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + items[index].text + '</span>'
			}
		}
	}

	return (
		<section className={cn(s.wrapper, 'section')}>
			<div className='container'>
				<h2 className='title mb-7'>{title}</h2>
				<div className={s.slider}>
					<Swiper {...swiperParams} effect={'fade'}>
						{items.map((item, idx) => (
							<SwiperSlide key={idx}>
								<Image
									className={cn(s.slider__img, 'br-15')}
									src={imgPath + item.image.data.attributes.url}
									width={item.image.data.attributes.width}
									height={item.image.data.attributes.height}
									alt={item.text}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={s.navigation__wrapper}>
						<h2 className='text'>Разрешение</h2>
						<div className={s.navigation}>
							<div className={'quality-pagination'}></div>
						</div>
					</div>
				</div>

				<div className='image-resolution__list'>
					<div className={s.sliderNavs}></div>
				</div>
			</div>
		</section>
	)
}

export default HomeResolution
