import React, { useRef, useState } from 'react'
import s from './Client.module.scss'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import cn from 'classnames'
import 'swiper/css'
import 'swiper/css/grid'
import { Navigation, Grid } from 'swiper/modules'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowLeftCircle from '@/components/icons/ArrowLeftCircle'
import ArrowRightCircle from '@/components/icons/ArrowRightCircle'
import ClientItem from './ClientItem/ClientItem'
// import BgImage from '../../../images/clients-bg.jpg'

const Client = ({ client, categories }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	const swiperParams = {
		loop: true,
		slidesPerView: 2,
		grid: {
			rows: 2,
			fill: 'row'
		},
		spaceBetween: 20,
		modules: [Navigation, Grid],
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			1279: {
				slidesPerView: 4,
				spaceBetween: 40,
				grid: {
					rows: 2,
					fill: 'row'
				}
			},
			999: {
				spaceBetween: 40,
				slidesPerView: 3,
				grid: {
					rows: 2,
					fill: 'row'
				}
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 40,
				grid: {
					rows: 2,
					fill: 'row'
				}
			}
		}
	}
	return (
		<div className={s.wrapper}>
			<LayoutContainer
				categories={categories}
				title={client.attributes.mainInfo.meta_title}
				description={client.attributes.mainInfo.meta_description}
			>
				<div className={cn('section')}>
					<div className='container'>
						<h1 className={cn('title-l color-white', s.title)}>
							{client.attributes.mainInfo.title}
						</h1>
						<div className={s.slider__wrapper}>
							<Swiper {...swiperParams} className={s.slider}>
								{client.attributes.clientsLogos.data.map((item, idx) => (
									<SwiperSlide className={s.slider__item} key={idx}>
										<div className={s.slider__img}>
											<Image
												className={cn('br-15', s.slider__logo)}
												src={imgPath + item.attributes.url}
												width={item.attributes.width}
												height={item.attributes.height}
												alt={item.attributes.name}
											/>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div className={s.slider__navigation}>
								<div className={cn('swiper-button-prev swiper-btn', s.swiperBtn, s.btn__prev)}>
									<ArrowLeftCircle />
								</div>
								<div className={cn('swiper-button-next swiper-btn', s.swiperBtn, s.btn__next)}>
									<ArrowRightCircle />
								</div>
							</div>
						</div>
						{client.attributes.aboutClient.map((item, idx) => (
							<ClientItem item={item} key={idx} />
						))}
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Client
