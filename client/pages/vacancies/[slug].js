import React from 'react'
import api from '../../api'
import VacancyPage from '@/components/pages/VacancyPage/VacancyPage'

const Index = ({ vacancies, vacancyItem,categories }) => {
	return (
		<VacancyPage vacancies={vacancies} vacancyItem={vacancyItem} categories={categories}/>
	)
}

export default Index

export async function getServerSideProps(ctx) {
	const [vacancies, vacancyItem,categories] = await Promise.all([
		// api({ url: `/vacancies/${ctx.query.slug}`, method: 'get' })
		api({
			url: '/vacancies?populate=*',
			method: 'get'
		}),
		api({
			url: `/vacancies/${ctx.query.slug}`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])
	return {
		props: {
			vacancies: vacancies.data.data,
			vacancyItem: vacancyItem.data.data.attributes,
			categories: categories.data.data
		}
	}
}
