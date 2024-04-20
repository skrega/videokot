import React from 'react'
import s from './HomeAbout.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import AboutItems from './AboutItems/AboutItems'

const HomeAbout = ({ title, text, items, image }) => {
	const imgPath = process.env.NEXT_PUBLIC_API

	return (
		<section className={cn(s.wrapper, 'section')}>
			<div className='container'>
				<div className={s.inner}>
					<div className={s.content}>
						<h2 className={cn('title mb-7', s.title)}>{title}</h2>
						<div className={s.items}>
							{items.map((item, idx) => (
								<AboutItems item={item} key={idx} />
							))}
						</div>
					</div>
					<div className={s.col}>
						<p className={cn(s.text, 'text-center bolder color-white title-md')}>
							Современная система видеонаблюдения - это уже не просто картинка на мониторе, за
							которой должен непрерывно следить сотрудник службы безопасности.
						</p>
						<div className={s.img}>
							<Image
								src={imgPath + image.data.attributes.url}
								width={image.data.attributes.width}
								height={image.data.attributes.height}
								alt={'баннер'}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomeAbout
