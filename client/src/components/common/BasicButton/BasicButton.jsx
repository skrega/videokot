import React from 'react'
import s from './BasicButton.module.scss'
import CircleArrowIconBlack from '@/components/icons/CircleArrowIconBlack'
import A from '../A'

const BasicButton = ({ children, click, href = '' }) => {
	
	return href ? (
		<A className='btn-outline btn' href={href}>
			{children}
			<CircleArrowIconBlack />
		</A>
	) : (
		<button className='btn-outline btn' onClick={() => click(true)}>
			{children}
			<CircleArrowIconBlack />
		</button>
	)
}

export default BasicButton
