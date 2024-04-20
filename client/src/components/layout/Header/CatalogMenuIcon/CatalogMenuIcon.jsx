import React from 'react'
import s from './CatalogMenuIcon.module.scss'

const CatalogMenuIcon = () => {
	return (
		<button className={s.button}>
			<svg
				width='14'
				height='13'
				viewBox='0 0 14 13'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect x='0.478516' width='5.53879' height='5.26316' rx='1' fill='white' />
				<rect x='8.23242' width='5.53879' height='5.26316' rx='1' fill='white' />
				<rect x='0.478516' y='7.36816' width='5.53879' height='5.26316' rx='1' fill='white' />
				<rect x='8.23242' y='7.36914' width='5.53879' height='5.26316' rx='1' fill='white' />
			</svg>
			<span className={s.text}>Каталог</span>
		</button>
	)
}

export default CatalogMenuIcon
