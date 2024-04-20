import React from 'react'
import s from './CatalogDescription.module.scss'
import cn from 'classnames'
import Image from 'next/image'

const CatalogDescription = ({ content }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<>
			<div
				className={cn('text-center bolder color-white', s.text)}
				dangerouslySetInnerHTML={{ __html: content.text }}
			></div>
			<div className={cn('grid', s.description)}>
				{content.img.data !== null && (
					<Image
						className={cn('br-15', s.img)}
						src={imgPath + content.img.data.attributes.url}
						width={content.img.data.attributes.width}
						height={content.img.data.attributes.height}
						alt={content.img.data.attributes.name}
					/>
				)}
				<div className={cn('br-15', s.benefits)}>
					<div className={cn('text-center title-md bolder', s.title)}>{content.titleBenefits}</div>
					<div className={s.items}>
						{content.benefits.map((item, idx) => (
							<div className={s.item} key={idx}>
								{item.image.data && 
								<Image
									className={s.item__icon}
									src={imgPath + item.image.data.attributes.url}
									width={item.image.data.attributes.width}
									height={item.image.data.attributes.height}
									alt={item.image.data.attributes.name}
								/>}
								<div className={cn('text', s.item__text)}>{item.text}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default CatalogDescription
