import React from 'react'
import s from './Vacancy.module.scss'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import cn from 'classnames'
import VacanciesList from './VacanciesList/VacanciesList'

const Vacancy = ({ vacancies,categories }) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={'Вакансии'}
				description={'Вакансии'}>
				<div className='container'>
					<h1 className={cn('title-l', s.title)}>Вакансии</h1>
					<VacanciesList vacancies={vacancies} />
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Vacancy
