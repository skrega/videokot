import React from 'react'
import s from './Phone.module.scss'
import cn from 'classnames'

const Phone = ({color}) => {
	return (
		<a className={cn(color == 'white' ? s.white : '', s.phone)} href='tel:88005005924'>
			<span></span>8 (800) 500 59 24
		</a>
	)
}
export default Phone
