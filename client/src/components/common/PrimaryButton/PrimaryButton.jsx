import React from 'react'
import CircleArrowIcon from '@/components/icons/CircleArrowIcon'
import s from './PrimaryButton.module.scss'
import A from '../A'

const PrimaryButton = ({ children, click, href = '' }) => {
	return href ? (
		<A className='btn-primary' href={href}>
			{children}
			<CircleArrowIcon />
		</A>
	) : (
		<button className='btn-primary'>
			{children}
			<CircleArrowIcon />
		</button>
	)
}

export default PrimaryButton
