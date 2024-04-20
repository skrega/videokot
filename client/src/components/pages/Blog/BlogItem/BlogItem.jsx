import React from 'react'
import s from './BlogItem.module.scss'
import cn from 'classnames'
import A from '@/components/common/A'
import Image from 'next/image'

const BlogItem = ({ item }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<article className={s.item}>
			<A href={'blog/' + item.slug} className={s.item__img}>
				<Image
					className={cn('br-15')}
					src={imgPath + item.thumbnail.data.attributes.url}
					width={item.thumbnail.data.attributes.width}
					height={item.thumbnail.data.attributes.height}
					alt={item.titleH1}
				/>
			</A>
			<div className={cn('text-center', s.item__content)}>
				<h4 className={cn('title-md color-white bolder', s.item__title)}>{item.titleH1}</h4>
				<p className={cn('text color-white', s.item__text)}>{item.shortDescriprion}</p>
				<A href={'blog/' + item.slug} className={s.item__btn} >Читать статью</A>
			</div>
		</article>
	)
}

export default BlogItem
