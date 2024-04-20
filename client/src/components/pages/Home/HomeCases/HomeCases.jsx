import React, { useRef, useState } from 'react'
import s from './HomeCases.module.scss'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import cn from 'classnames'
import ArrowRightCircle from '@/components/icons/ArrowRightCircle'
import ArrowLeftCircle from '@/components/icons/ArrowLeftCircle'
import CaseItem from './CaseItem/CaseItem'

const HomeCases = ({ slider, title, items }) => {
	const swiperParams = {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Navigation, Pagination],
		pagination: {
			el: '.pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			1000: {
				slidesPerView: 2,
				spaceBetween: 24
			}
		}
	}
	return (
		<section className={cn(s.wrapper, 'color-white section')}>
			<div className='container'>
				<h2 className={cn(s.title, 'title mb-7')}>{title}</h2>
				<div className={s.inner}>
					<Swiper {...swiperParams} className={s.slider}>
						{items.map((item, idx) => (
							<SwiperSlide key={idx}>
								<CaseItem item={item} />
							</SwiperSlide>
						))}
					</Swiper>
					<div className={s.sliderNavs}>
						<div className={'pagination'}></div>
						<div className={s.arrows}>
							<div className={cn('swiper-button-prev swiper-btn', s.swiperBtn, s.btn__prev)}>
								<ArrowLeftCircle />
							</div>
							<div className={cn('swiper-button-next swiper-btn', s.swiperBtn, s.btn__next)}>
								<ArrowRightCircle />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeCases
