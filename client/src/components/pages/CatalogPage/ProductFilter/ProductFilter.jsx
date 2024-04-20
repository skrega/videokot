import React, { useEffect, useState } from 'react'
import s from './ProductFilter.module.scss'
import cn from 'classnames'

const FilterProduct = ({ productAttributes, handleAttributeChange, selectedAttributes }) => {
	const [checked, setChecked] = useState(false)
	const [open, setOpen] = useState(false)
	const handleChange = event => {
        handleAttributeChange(event) // Передаем событие в функцию handleAttributeChange
	}
	const handleClick = e => {
		e.target.classList.toggle(s.opened)
	}

	return (
		<div className={s.items}>
			{Object.keys(productAttributes).map((attributeName, index) => (
				<div className={s.item} key={index}>
					<div className={cn('s-bold', s.item__name, open && s.opened)} onClick={handleClick}>
						{attributeName}
					</div>
					<div className={cn(s.item__values, open && s.opened)}>
						{productAttributes[attributeName].map((attribute, i) => (
							<div className={cn(s.checkbox, checked ? s.active : '')} key={i}>
								<input
									type='checkbox'
									id={attribute.id}
									value={attribute.value}
									onChange={handleChange}
									onClick={e => {
										setChecked(!checked)
									}}
								/>
								<label className={s.label} htmlFor={attribute.id}>
									{attribute.value}
								</label>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default FilterProduct
