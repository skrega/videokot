import React from 'react'
import s from './MenuIcon.module.scss'

const MenuIcon = () => {
	return (
		<button className={s.button} value='заказать'>
			Меню
			<svg
				width='50'
				height='50'
				viewBox='0 0 50 50'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25Z'
					stroke='white'
				></path>
				<line
					x1='7.5'
					y1='24.6743'
					x2='41.5'
					y2='24.6743'
					stroke='white'
					strokeLinecap='round'
				></line>
				<line x1='7.5' y1='16.5' x2='41.5' y2='16.5' stroke='white' strokeLinecap='round'></line>
				<line
					x1='7.5'
					y1='32.5298'
					x2='41.5'
					y2='32.5298'
					stroke='white'
					strokeLinecap='round'
				></line>
			</svg>
		</button>
	)
}

export default MenuIcon
