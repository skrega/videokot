import React, { useRef, useState } from 'react'
import s from '../BasicInput/BasicInput.module.scss'
import cn from 'classnames'

const BasicFileInput = ({
	style,
	name,
	value,
	label,
	errors,
	placeholder,
	id,
	register,
	type,
	required
}) => {
	const [selectedFile, setSelectedFile] = useState(null)
	const fileRef = useRef(null)
	const handleFileChange = e => {
		if (e.target.files[0]) {
			setSelectedFile(e.target.files[0])
		} 
	}
// if(errors[name] === undefined){
// 	setSelectedFile(document.querySelector('input[type="file"]').files[0].name)
// }

	return (
		<div className={s.input__inner}>
			{errors[name]?.message && <spna className={s.error__label}>{errors[name]?.message}</spna>}
			<label
				className={cn(s.label, style ? s.black : '', errors[name] ? s.error : '')}
				htmlFor={name}
			>
				<span>{label ? label : placeholder}</span>
			</label>{' '}
			<div className={s.choose__file}>
				<div className={s.file__btn}>
					{selectedFile ? 'Файл: ' + selectedFile.name : 'Выберите файл'}
					<input
						className={s.file}
						type='file'
						name={name}
						{...register(name, { required })}
						// onChange={handleFileChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default BasicFileInput
