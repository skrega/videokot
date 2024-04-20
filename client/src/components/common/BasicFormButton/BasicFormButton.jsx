import React from 'react'
import s from './BasicFormButton.module.scss'
import cn from 'classnames'
import CircleArrowIcon from '@/components/icons/CircleArrowIcon'
import loader from '@/images/icons/loader.gif'
import Image from 'next/image'

const BasicFormButton = ({ text, type, loading, subType }) => {

	let buttonType = null
	if (type === 'submit') {
		buttonType = 'submit'
	} else {
		buttonType = 'button'
	}
	return (
		<button className={cn(s.wrapper, loading && s.loadingButton, 'btn-primary')} type={buttonType}>
			<span className={s.text}>{text}</span>
			{loading ? (
				<div className={s.loading__inner}>
					<Image className={s.loader} src={loader} full={true} alt='loading'/>
				</div>
			) : (
				<CircleArrowIcon />
			)}
		</button>
	)
}

export default BasicFormButton
