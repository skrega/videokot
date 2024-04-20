import React, { useState } from 'react'
import s from './BasicCheckbox.module.scss'
import cn from 'classnames'
import A from '../A'

const BasicCheckbox = ({ name, value, register, errors }) => {
	const [checked, setChecked] = useState(false)

	return (
		<div className={s.wrapper}>
			<label
				className={cn(
					s.label,
					checked ? s.active : '',
					errors[name]?.message && s.error
				)}
			>
				<input
					className={s.checkbox}
					type='checkbox'
					name={name}
					{...register(name)}
					checked={value !== undefined ? checked : checked}
					onClick={() => {
						setChecked(!checked)
					}}
				/>
				<p>Согласен (на) с &nbsp;<a href={'/privacy'} target={'_blank'}> политикой конфиденциальности</a></p>
			</label>
			{errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>}
		</div>
	)
}

export default BasicCheckbox
