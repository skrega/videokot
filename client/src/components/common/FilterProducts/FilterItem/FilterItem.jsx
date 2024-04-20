// import { useState } from 'react'
// import s from './FilterItem.module.scss'
// import cn from 'classnames'
// import { useRouter } from 'next/router'
// import { useDispatch } from 'react-redux'
// import { selectedAttributes } from '@/store/filterSlice'
// const FilterItem = ({ label, attributes, handleAttributeChange, selectedAttributes }) => {
// 	const dispatch = useDispatch()

// 	const router = useRouter()
// 	const queryParams = router.query

// 	const [checked, setChecked] = useState(false)
// 	const [open, setOpen] = useState(false)
// 	const handleChange = event => {
// 		handleAttributeChange(event)
// 	}

// 	const handleClick = e => {
// 		e.target.classList.toggle(s.opened)
// 	}

// 	return (
// 		<div className={s.item}>
// 			<div className={cn('s-bold', s.item__name, open && s.opened)} onClick={handleClick}>
// 				{label}
// 			</div>
// 			<div className={cn(s.item__values, open && s.opened)}>
// 				{attributes.attributes.map((attribute, i) => (
// 					<div className={cn(s.checkbox, checked ? s.active : '')} key={i}>
// 						<input
// 							type='checkbox'
// 							id={attribute.id}
// 							value={attribute.value}
// 							onChange={handleChange}
// 							onClick={e => {
// 								setChecked(!checked)
// 							}}
// 						/>
// 						<label className={s.label} htmlFor={attribute.id}>
// 							{attribute.value}
// 						</label>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

// export default FilterItem

import { useState } from 'react'
import s from './FilterItem.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectedAttrs, toggleChecked } from '@/store/filterSlice'

const FilterItem = ({ label, attributes }) => {
	const dispatch = useDispatch()

	// console.log(selectedAttributes)
	// const router = useRouter()
	
	// const queryParams = router.query
	// if(queryParams){
	// 	const selectedAttributes = useSelector(state => state.filter.selectedAttributes)
	// }

	// useEffect(() => {
	// 	const querySelectedAttributes = queryParams || '[]'
	// 	const selectedAttributeIds = JSON.parse(querySelectedAttributes)

	// 	const updatedAttributes = attributes.attributes.map(attribute => ({
	// 		...attribute,
	// 		checked: selectedAttributeIds.some(selectedAttr => selectedAttr.id === attribute.id)
	// 	}))

	// 	attributes.attributes = updatedAttributes
	// }, [queryParams.selectedAttributes])

	const [checked, setChecked] = useState(false)
	const [open, setOpen] = useState(false)

	const handleClick = e => {
		e.target.classList.toggle(s.opened)
	}
	const handleCheckbox = id => {
		setChecked(!checked)
	}
	return (
		<div className={s.item}>
			<div className={cn('s-bold', s.item__name, open && s.opened)} onClick={handleClick}>
				{label}
			</div>
			<div className={cn(s.item__values, open && s.opened)}>
				{attributes.attributes.map((attribute, i) => (
					<div className={cn(s.checkbox, checked ? s.active : '')} key={i}>
						<input
							type='checkbox'
							id={attribute.id}
							value={attribute.value}
							onChange={e => {
								dispatch(selectedAttrs(e.target))
							}}
							onClick={() => {
								handleCheckbox(attribute.id)
							}}
						/>
						<label className={s.label} htmlFor={attribute.id}>
							{attribute.value}
						</label>
					</div>
				))}
			</div>
		</div>
	)
}

export default FilterItem
