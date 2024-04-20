import React from 'react'
import s from './Card.module.scss'
import cn from 'classnames'
import A from '../A'
import Image from 'next/image'

const Card = ({ item, url, preview, title }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<article className={s.item}>
			<A href={url + '/' + item.slug}>
				<Image
					className={cn('br-15', s.item__img)}
					src={imgPath + preview.data.attributes.url}
					width={preview.data.attributes.width}
					height={preview.data.attributes.height}
					alt={title}
				/>

				<div className={cn('text-center', s.item__content)}>
					<h4 className={cn('title-md color-white bolder', s.item__title)}>{title}</h4>
					{item.shortDescription && (
						<p className={cn('text color-white', s.item__text)}>{item.shortDescription}</p>
					)}
					<div className={s.item__btn}>Читать статью</div>
				</div>
			</A>
		</article>
	)
}

export default Card
