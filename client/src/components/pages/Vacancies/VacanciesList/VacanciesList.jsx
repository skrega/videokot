import React from 'react'
import s from './VacanciesList.module.scss'
import VacancyItem from '../VacancyItem/VacancyItem'
import cn from 'classnames'

const VacanciesList = ({ vacancies }) => {
	return (
		<div className={cn('section',s.wrapper)}>
			<div className={s.items}>
				{vacancies.map((item, idx) => (
					<VacancyItem item={item.attributes} key={idx} />
				))}
			</div>
		</div>
	)
}

export default VacanciesList
