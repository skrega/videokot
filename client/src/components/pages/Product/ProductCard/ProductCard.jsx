import React from 'react'
import s from './ProductCard.module.scss'
import cn from 'classnames'
import A from '@/components/common/A'
import Image from 'next/image'
import formatPrice from '../../../../../hooks/formatPrice'
import useWindowSize from '../../../../../hooks/useWindowSize'

const ProductCard = ({ product, viewMode, url }) => {
	const { width } = useWindowSize()
	let productUrl = ''
	let price = null
	
	const currentCategory = product.attributes.category.data.attributes.slug

	const imgPath = process.env.NEXT_PUBLIC_API

	if (currentCategory === 'sets') {
		productUrl = product.attributes.preview.data.attributes
		price = product.attributes.variable.slice(0)
		price = 'от ' + formatPrice(price[0].total)
	} else {
		productUrl = product.attributes.images.data[0].attributes
		price = formatPrice(product.attributes.price)
	}
	const discountPercentage = Math.round(
		((product.attributes.price - product.attributes.salePrice) / product.attributes.price) * 100
	)

	return (
		<div className={cn('br-15', s.item, viewMode === 'list' ? s.list : '')}>
			<A href={url + product.attributes.slug}>
				{viewMode === 'list' ? (
					<div className={s.item__col}>
						<Image
							className={s.item__img}
							src={imgPath + productUrl.url}
							width={productUrl.width}
							height={productUrl.height}
							alt={product.attributes.name}
						/>
						{width > 641 && (
							<h4 className={cn('text text-center', s.item__title)}>{product.attributes.name}</h4>
						)}
					</div>
				) : (
					<Image
						className={s.item__img}
						src={imgPath + productUrl.url}
						width={productUrl.width}
						height={productUrl.height}
						alt={product.attributes.name}
					/>
				)}
				<div className={cn('text-center', s.item__content)}>
					{viewMode !== 'list' && (
						<h4 className={cn('text', s.item__title)}>{product.attributes.name}</h4>
					)}
					{viewMode == 'list' && width < 641 && 
						<h4 className={cn('text', s.item__title)}>{product.attributes.name}</h4>
					}
					<p className={cn('bolder title-md', s.item__price)}>
						{product.attributes.salePrice ? formatPrice(product.attributes.salePrice) : price} ₽
					</p>
					<button className={cn('btn btn-primary', s.item__btn)}>Подробнее</button>
				</div>
				{product.attributes.salePrice && (
					<div className={s.sale}>
						-{discountPercentage} <span>%</span>
					</div>
				)}
			</A>
		</div>
	)
}

export default ProductCard
