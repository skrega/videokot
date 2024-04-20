import React, { useContext } from 'react'
import s from './ProductPageContent.module.scss'
import A from '@/components/common/A'
import cn from 'classnames'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon'
import formatPrice from '../../../../../hooks/formatPrice'
import { CartContext } from '@/context/CartContext'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '@/app/cart'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductPageContent = ({ productProps, item }) => {
	// const dispatch = useDispatch()
	const product = item.attributes
	const { addToCart } = useContext(CartContext)
	const handleAddToCart = (item, id) => {
		addToCart(item, item.id)
		toast.success(`${item.attributes.name} успешно добавлен в корзину`)
	}
	const imgPath = process.env.NEXT_PUBLIC_API
	const swiperParams = {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 16,
		modules: [Navigation, Pagination],
		pagination: {
			el: '.pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return (
					'<div class="' +
					className +
					'">' +
					'<img src="' +
					imgPath +
					product.images.data[index].attributes.url +
					'" alt="" />' +
					'</div>'
				)
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	}

	// const handleAddToCart = (item, id) => {
	// 	dispatch(addToCart(item, id))
	// }
	return (
		<div className={cn('section', s.wrapper)}>
			<ToastContainer />
			<A className={s.nav__link} href={'/catalog/'}>
				<svg
					width='23'
					height='8'
					viewBox='0 0 23 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M0.646447 3.55172C0.451184 3.74698 0.451184 4.06356 0.646447 4.25883L3.82843 7.44081C4.02369 7.63607 4.34027 7.63607 4.53553 7.44081C4.7308 7.24555 4.7308 6.92896 4.53553 6.7337L1.70711 3.90527L4.53553 1.07685C4.7308 0.881584 4.7308 0.565002 4.53553 0.36974C4.34027 0.174477 4.02369 0.174477 3.82843 0.36974L0.646447 3.55172ZM1 4.40527H23V3.40527H1V4.40527Z'
						fill='black'
					/>
				</svg>
				В каталог камер
			</A>
			<div className={s.inner}>
				<div className={s.images}>
					<Swiper {...swiperParams} className={s.slider}>
						{product.images.data.map((item, idx) => (
							<SwiperSlide key={idx}>
								<Image
									src={imgPath + item.attributes.url}
									width={item.attributes.width}
									height={item.attributes.height}
									alt={idx}
								/>
							</SwiperSlide>
						))}

						<div className={cn('swiper-button-prev', s.swiperBtn, s.btn__prev)}>
							<ArrowLeftIcon />
						</div>
						<div className={cn('swiper-button-next', s.swiperBtn, s.btn__next)}>
							<ArrowRightIcon />
						</div>
					</Swiper>
					<div className={s.sliderNavs}>
						<div className={'pagination'}></div>
					</div>
				</div>
				<div className={s.content}>
					<div className={s.top__content}>
						<h1 className={cn('text-l bolder text-center', s.title)}>{product.name}</h1>
						{product.salePrice === null ? (
							<p className={cn('color-primary bolder text-center', s.price)}>
								{formatPrice(product.price)} ₽
							</p>
						) : (
							<div className={s.prices}>
								<div className={cn('bolder title-md', s.old__price)}>
									{formatPrice(product.price)} ₽
								</div>
								<p className={cn('color-primary bolder', s.price, s.new_price)}>
									{formatPrice(product.salePrice)} ₽
								</p>
							</div>
						)}
						{/* <div className={s.product__btn} onClick={() => addToCart(item, item.id)}>
							<PrimaryButton>Оставить заявку</PrimaryButton>
						</div> */}
						<div className={s.product__btn} onClick={() => handleAddToCart(item, item.id)}>
							<PrimaryButton>Оставить заявку</PrimaryButton>
						</div>
					</div>
					{product.attributes.length > 0 && (
						<div className={s.features}>
							<h3 className={cn('bolder text-center', s.features__title)}>Характеристики камеры</h3>
							<dl className={s.table}>
								{product.attributes.map((item, idx) => (
									<div className={s.table__row}>
										<dt>{item.name}</dt>
										<dd className={cn('text-center', s.table__value)}>{item.value}</dd>
									</div>
								))}
							</dl>
						</div>
					)}
				</div>
			</div>
			<div
				className={cn('text', s.description)}
				dangerouslySetInnerHTML={{ __html: product.description }}
			></div>
			<div className={s.product__link}>
				<PrimaryButton href='/catalog/sets/'>Посмотреть готовые комплекты</PrimaryButton>
			</div>
		</div>
	)
}

export default ProductPageContent
