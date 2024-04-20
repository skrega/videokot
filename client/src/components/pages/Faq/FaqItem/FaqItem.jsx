import React, { useState } from 'react'
import s from './FaqItem.module.scss'
import cn from 'classnames'

const FaqItem = ({ item }) => {
	const [open, setOpen] = useState(false)
	return (
		<div
			className={cn('color-white br-15', s.item, open && s.opened)}
			onClick={() => setOpen(prev => !prev)}
		>
			<div className={s.item__head}>
				<div className={cn('item__number',s.item__number)}>{item.id}</div>
				<h4 className={cn('title-md bolder', s.item__title)}>{item.title}</h4>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clip-path='url(#clip0_738_17158)'>
						<rect y='11' width='24' height='2' rx='1' fill='white'></rect>
						<rect x='11' width='2' height='24' rx='1' fill='white'></rect>
					</g>
					<defs>
						<clipPath id='clip0_738_17158'>
							<rect width='24' height='24' fill='white'></rect>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div
				className={cn('text', s.item__spoller)}
				dangerouslySetInnerHTML={{ __html: item.text }}
			></div>
		</div>
	)
}

export default FaqItem
