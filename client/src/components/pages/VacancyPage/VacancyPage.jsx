import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import VacancyPageContent from './VacancyPageContent/VacancyPageContent'

const VacancyPage = ({ vacancies, vacancyItem, categories }) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={vacancyItem.meta_title}
				description={vacancyItem.meta_description}>
				<VacancyPageContent vacancyItem={vacancyItem} />
			</LayoutContainer>
		</div>
	)
}

export default VacancyPage
