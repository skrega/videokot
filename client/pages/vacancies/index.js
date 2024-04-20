import React from 'react'
import api from '../../api'
import Vacancies from '@/components/pages/Vacancies/Vacancies'

const Index = ({ vacancies, categories }) => {
	return <Vacancies vacancies={vacancies} categories={categories} />
}

export default Index


export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
        ]
    }, {
        encodeValuesOnly: true
    })

    const [vacancies, categories] = await Promise.all([
        api({
            url: `/vacancies?${query}`,
            method: 'get'
        }),
		api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            vacancies: vacancies.data.data,
			categories: categories.data.data
        }
    }
}