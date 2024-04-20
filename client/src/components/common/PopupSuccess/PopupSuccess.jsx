import React, { useState } from 'react'
import s from './PopupSuccess.module.scss'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import Cancel from '@/components/icons/Cancel'
import cn from 'classnames'

const PopupSuccess = ({ close, name }) => {
	const [open, setOpen] = useState(false)

	return (
		<div className={s.popup}>
			<div className={cn('close', s.cancel)} onClick={() => close(false)}>
				<Cancel />
			</div>
			<div className={s.popup__inner}>
				<div className={cn('title-md text-center bolder', s.popup__text)}>
					<p>{name ? name + ',' : ''} СПАСИБО ЗА ЗАЯВКУ!</p>
					<p>НАШ МЕНЕДЖЕР СВЯЖЕТСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ!</p>
				</div>
				<div onClick={() => close(false)}>
					<PrimaryButton>Закрыть</PrimaryButton>
				</div>
			</div>
		</div>
	)
}

export default PopupSuccess
