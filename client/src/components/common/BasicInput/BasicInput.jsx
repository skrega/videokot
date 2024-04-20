import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import cn from 'classnames'
import s from './BasicInput.module.scss'

const BasicInput = ({
	style,
	name,
	value,
	label,
	errors,
	placeholder,
	id,
	register,
	type,
	required,
	phone
}) => {
	const [phoneSuccess, setPhoneSuccess] = useState(false)
	const [lengthValue, setLengthValue] = useState(0)

	useEffect(() => {
		if (phone) {
			if (value?.replace(/[^0-9\-]/g, '').length > 3) {
				setPhoneSuccess(true)
			} else {
				setPhoneSuccess(false)
			}
		} else {
			setLengthValue(value?.length)
		}
	}, [value])

	return phone ? (
		<div className={s.input__inner}>
			{errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>}

			<label
				className={cn(s.label, style ? s.black : '', errors[name] ? s.error : '')}
				htmlFor={name}
			>
				<span>{label ? label : placeholder}</span>
			</label>
			<InputMask mask='+7 (999) 999-99-99' {...register(name, { required })}>
				{inputProps => (
					<input
						id={id ? id : name}
						className={cn(
							style ? s.border : '',
							s.input,
							phoneSuccess > 0 ? s.focus : '',
							errors[name] ? s.error : ''
						)}
						placeholder={placeholder}
						name={name}
					/>
				)}
			</InputMask>
		</div>
	) : (
		<div className={s.input__inner}>
			{errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>}
			<label
				className={cn(s.label, style ? s.black : '', errors[name] ? s.error : '')}
				htmlFor={name}
			>
				<span>{label ? label : placeholder}</span>
			</label>

			<input
				id={id ? id : name}
				className={cn(
					s.input,
					style ? s.border : '',
					lengthValue > 0 ? s.focus : '',
					errors[name] ? s.error : ''
				)}
				placeholder={placeholder}
				type={type}
				name={name}
				{...register(name, { required })}
			/>
		</div>
	)
}

export default BasicInput
