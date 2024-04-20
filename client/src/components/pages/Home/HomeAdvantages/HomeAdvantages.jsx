import React from 'react'
import s from './HomeAdvantages.module.scss'
import cn from 'classnames'
import Image from 'next/image'

const HomeAdvantages = ({ title, items }) => {
	const imgPath = process.env.NEXT_PUBLIC_API

	return (
		<section className={cn('section', s.wrapper)}>
			<div className='container'>
				<h2 className='title mb-7'>{title}</h2>
				<ul className={s.items}>
					{items.map((item, idx) => (
						<li className={cn('grid', s.item)} key={idx}>
							<div className={cn('grid', s.item__col)}>
								<div className={s.item__icon}>
									<Image
										src={imgPath + item.icon.data.attributes.url}
										width={item.icon.data.attributes.width}
										height={item.icon.data.attributes.height}
										alt={item.title}
									/>
								</div>
								<h4 className={cn('medium title-md', s.item__title)}>{item.title}</h4>
							</div>

							<p className={cn('text', s.item__text)}>{item.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default HomeAdvantages
