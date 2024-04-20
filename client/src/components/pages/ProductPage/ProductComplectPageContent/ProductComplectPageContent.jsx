import React, { useContext, useState } from 'react'
import s from './ProductComplectPageContent.module.scss'
import cn from 'classnames'
import A from '@/components/common/A'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Image from 'next/image'
import formatPrice from '../../../../../hooks/formatPrice'
import ProductComplectTable from './ProductComplectTable/ProductComplectTable'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import useWindowSize from '../../../../../hooks/useWindowSize'
import { CartContext } from '@/context/CartContext'

const ProductComplectPageContent = ({ item }) => {
	const { width } = useWindowSize()
	const [tabIndex, setTabIndex] = useState(0)
	const [open, setOpen] = useState(false)

	const imgPath = process.env.NEXT_PUBLIC_API

	const { addToCart } = useContext(CartContext)
	const handleAddToCart = (item, id) => {
		addToCart(item, item.id)
		toast.success(`${item.attributes.name} успешно добавлен в корзину`)
	}

	return (
		<div className='section'>
			{width > 767 && (
				<A className={cn('flex color-white', s.nav__link)} href={'/catalog/sets'}>
					<svg
						width='23'
						height='8'
						viewBox='0 0 23 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H23V3.5H1V4.5Z'
							fill='white'
						/>
					</svg>
					К комплектам
				</A>
			)}
			<h4 className={cn('title-md text-center color-white bolder', s.top__text)}>{item.topText}</h4>
			{width < 767 && (
				<A className={cn('flex color-white', s.nav__link)} href={'/catalog/sets'}>
					<svg
						width='23'
						height='8'
						viewBox='0 0 23 8'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H23V3.5H1V4.5Z'
							fill='white'
						/>
					</svg>
					К комплектам
				</A>
			)}
			<div className={s.inner}>
				<Tabs
					className={s.tabs__inner}
					selectedIndex={tabIndex}
					onSelect={index => setTabIndex(index)}
				>
					{width < 767 &&
						item.variable.map(
							(item, idx) =>
								tabIndex == idx && (
									<div
										className={cn(s.selected__tab, open && s.opened)}
										onClick={() => setOpen(prev => !prev)}
									>
										{item.title}
									</div>
								)
						)}
					<TabList className={s.tabs}>
						{item.variable.map((item, idx) => (
							<Tab
								className={cn('text bolder', s.tab, tabIndex == idx ? s.active : '')}
								key={idx}
								onClick={() => setOpen(prev => !prev)}
							>
								{item.title}
							</Tab>
						))}
					</TabList>
					{item.variable.map((variable, idx) => (
						<TabPanel className={s.tab__content} key={idx}>
							<div className={s.head}>
								<Image
									className={cn('br-15', s.main__img)}
									src={imgPath + item.img.data.attributes.url}
									width={item.img.data.attributes.width}
									height={item.img.data.attributes.height}
									alt={item.title}
								/>

								<div className={s.product__box}>
									<div className={s.head__productInner}>
										<div className={cn('text-center bolder text', s.product__title)}>
											{variable.productInVariable[0].productTitle}
										</div>
										<div className={s.head__product}>
											<div className={cn('text-center bolder text', s.product__name)}>
												{variable.productInVariable[0].name}
											</div>
											<Image
												className={s.product__img}
												src={imgPath + variable.productInVariable[0].img.data.attributes.url}
												width={variable.productInVariable[0].img.data.attributes.width}
												height={variable.productInVariable[0].img.data.attributes.height}
												alt={variable.productInVariable[0].name}
											/>
											<div
												className={cn('text-center', s.product__features)}
												dangerouslySetInnerHTML={{ __html: variable.productInVariable[0].text }}
											></div>
											<div
												className={cn(
													'text-center bolder color-primary',
													s.product__price,
													s.price
												)}
											>
												{formatPrice(variable.productInVariable[0].price)} ₽
											</div>
										</div>
									</div>
									{width < 1279 && (
										<div className={s.product}>
											<div className={cn('bolder text', s.product__title)}>
												{variable.productInVariable[1].productTitle}
											</div>
											<div className={s.product__box}>
												<div className={s.product__inner}>
													<div className={cn('text', s.product__count)}>
														{variable.productInVariable[1].count} шт
													</div>
													<div className={s.product__col}>
														<Image
															className={s.product__img}
															src={imgPath + variable.productInVariable[1].img.data.attributes.url}
															width={variable.productInVariable[1].img.data.attributes.width}
															height={variable.productInVariable[1].img.data.attributes.height}
															alt={variable.productInVariable[1].name}
														/>

														<div className={cn('text bolder text-center', s.product__name)}>
															{variable.productInVariable[1].name}
														</div>
														<div
															className={cn('text-center', s.product__features)}
															dangerouslySetInnerHTML={{
																__html: variable.productInVariable[1].text
															}}
														></div>

														<div className={s.product__price}>
															<div className={cn('text-center', s.price__text)}>
																{variable.productInVariable[1].textPrice}
															</div>
															<p className={cn('bolder color-primary', s.price)}>
																{formatPrice(variable.productInVariable[1].price)} ₽
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
							{width > 1279 && (
								<div className={s.product}>
									<div className={cn('bolder text', s.product__title)}>
										{variable.productInVariable[1].productTitle}
									</div>
									<div className={s.product__inner}>
										<div className={cn('text', s.product__count)}>
											{variable.productInVariable[1].count} шт
										</div>
										<div className={s.product__col}>
											<Image
												className={s.product__img}
												src={imgPath + variable.productInVariable[1].img.data.attributes.url}
												width={variable.productInVariable[1].img.data.attributes.width}
												height={variable.productInVariable[1].img.data.attributes.height}
												alt={variable.productInVariable[1].name}
											/>
											<div className={s.product__content}>
												<div className={cn('text bolder', s.product__name)}>
													{variable.productInVariable[1].name}
												</div>
												<div
													className={s.product__features}
													dangerouslySetInnerHTML={{ __html: variable.productInVariable[1].text }}
												></div>
											</div>

											<div className={s.product__price}>
												<div className={cn('text-center')}>
													{variable.productInVariable[1].textPrice}
												</div>
												<p className={cn('bolder color-primary', s.price)}>
													{formatPrice(variable.productInVariable[1].price)} ₽
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
							<ProductComplectTable table={variable.productTable} />
							<div className={s.complect__footer}>
								<div className={s.complect__pricesCol}>
									<div className={cn('text bolder', s.complect__priceSubtitle)}>
										Стоимость без учета скидки
									</div>
									<div className={cn('price bolder', s.complect__price, s.price)}>
										{formatPrice(variable.price)} ₽
									</div>
								</div>
								<div className={s.complect__pricesCol}>
									<div className={cn('text bolder', s.complect__priceSubtitle)}>
										Итоговая стоимость
									</div>
									<div className={cn('price color-primary bolder', s.complect__total, s.price)}>
										{formatPrice(variable.total)} ₽
									</div>
								</div>
								<div className={s.complect__btn}>
									<PrimaryButton>Оставить заявку</PrimaryButton>
								</div>
							</div>
						</TabPanel>
					))}
				</Tabs>
				<div className={s.description}>
					<h2 className={cn('title-md bolder', s.title__description)}>{item.titleDescription}</h2>
					<div
						className={cn('list text', s.description__text)}
						dangerouslySetInnerHTML={{ __html: item.description }}
					></div>
				</div>
			</div>
		</div>
	)
}

export default ProductComplectPageContent
