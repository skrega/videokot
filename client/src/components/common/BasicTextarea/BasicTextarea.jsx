import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import s from './BasicTextarea.module.scss'

const BasicTextarea = ({
	style,
	name,
	value,
	label,
	errors,
	placeholder,
	id,
	register,
	required
}) => {
	const [lengthValue, setLengthValue] = useState(0)

	useEffect(() => {
		setLengthValue(value?.length)
	}, [value])

	return (
		<div className={s.wrapper}>
			<label className={cn(s.label, style ? s.black : '')} htmlFor={name}>
				{label ? label : placeholder}
			</label>
			<textarea
				id={id ? id : name}
				className={cn(
					s.textarea,
					style ? s.border : '',
					lengthValue > 0 ? s.focus : ''
					// errors[name] ? s.error : ''
				)}
				placeholder={placeholder}
				name={name}
			></textarea>
		</div>
	)
}

export default BasicTextarea
