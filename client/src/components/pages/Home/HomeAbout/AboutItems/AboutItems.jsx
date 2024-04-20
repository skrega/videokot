import React, { useState } from 'react'
import s from '../HomeAbout.module.scss'
import cn from 'classnames'

const AboutItems = ({ item }) => {
	const [open, setOpen] = useState(false)
	return (
		<div className={cn(s.item, open && s.opened)} onClick={() => setOpen(prev => !prev)}>
			<div className={s.item__head}>
				<div className={cn(s.item__col, 'flex')}>
					<span className={cn(s.item__number, 'color-white')}>{item.id}</span>
					<h4 className={cn(s.item__title, 'title-md')}>{item.title}</h4>
				</div>
				<span className={s.item__icon}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clipPath='url(#clip0_2801_7121)'>
							<rect y='11' width='24' height='2' rx='1' fill='black' />
							<rect x='11' width='2' height='24' rx='1' fill='black' />
						</g>
						<defs>
							<clipPath id='clip0_2801_7121'>
								<rect width='24' height='24' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</span>
			</div>
			<div
				className={cn(s.item__text, 'text')}
				dangerouslySetInnerHTML={{ __html: item.text }}
			></div>
		</div>
	)
}

export default AboutItems
