import React from 'react'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import s from './HomeBlog.module.scss'
import cn from 'classnames'

const HomeBlog = ({ title, items }) => {
	
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<section className={cn('section', s.wrapper)}>
			<div className='container'>
				<h4 className='title mb-7' dangerouslySetInnerHTML={{ __html: title }}></h4>
				<div className={cn('grid', s.items)}>
					{items.map((item, idx) => (
						<article
							className={cn('br-15 color-white text-center', s.card)}
							key={idx}
							style={{
								background: `linear-gradient(193.5deg, #000000 19.06%, rgba(0, 0, 0, 0) 88.47%), url(${imgPath + item.image.data.attributes.url}); background-repeat: no-repeat; background-size: cover;background-position: center;`
							}}
						>
							<h6 className={cn('s-bold ', s.card__title)}>{item.title}</h6>
							{item.text && <p className={cn('text', s.card__text)}>{item.text}</p>}
							<PrimaryButton href={item.url}>Подробнее</PrimaryButton>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default HomeBlog
