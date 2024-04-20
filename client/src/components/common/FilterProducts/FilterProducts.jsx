import cn from 'classnames'
import FilterItem from './FilterItem/FilterItem'
import s from './FilterProducts.module.scss'
import { useDispatch } from 'react-redux'
import { handleFilter, handleResetFilters } from '@/store/filterSlice'

const FilterProducts = ({
	products,
	finalProductAttributes,
	handleAttributeChange,
	selectedAttributes
}) => {
	const dispatch = useDispatch()
	const submitFilter = () => {
		dispatch(handleFilter(products))
	}
	const cancleFilter = () => {
		document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
			checkbox.checked = false
		})
		dispatch(handleResetFilters())
	}
	return (
		<div className={s.items}>
			{finalProductAttributes.map((attributes, index) => (
				<FilterItem
					label={attributes.attributeName}
					attributes={attributes}
					handleAttributeChange={handleAttributeChange}
					selectedAttributes={selectedAttributes}
					key={index}
				/>
			))}
			<div className={cn('flex', s.buttons)}>
				<button className={cn(s.btn, s.btn__white)} onClick={submitFilter}>
					Применить
				</button>
				<button className={cn(s.btn, s.btn__outline)} onClick={cancleFilter}>
					Сбросить
				</button>
			</div>
		</div>
	)
}

export default FilterProducts
