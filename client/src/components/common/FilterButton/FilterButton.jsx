import React from 'react'
import s from './FilterButton.module.scss'

const FilterButton = () => {
	return (
		<button className={s.button}>
			<span>Фильтры</span>
			<svg
				width='30'
				height='30'
				viewBox='0 0 30 30'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M14 21H16C16.55 21 17 20.55 17 20C17 19.45 16.55 19 16 19H14C13.45 19 13 19.45 13 20C13 20.55 13.45 21 14 21ZM6 10C6 10.55 6.45 11 7 11H23C23.55 11 24 10.55 24 10C24 9.45 23.55 9 23 9H7C6.45 9 6 9.45 6 10ZM10 16H20C20.55 16 21 15.55 21 15C21 14.45 20.55 14 20 14H10C9.45 14 9 14.45 9 15C9 15.55 9.45 16 10 16Z'
					fill='white'
				/>
			</svg>
		</button>
	)
}

export default FilterButton
