import React from 'react'
import api from '../api'
import Installation from '@/components/pages/Installation/Installation';

const Index = ({installation, categories}) => {
    return <Installation installation={installation} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'installationItems',
            'mainInfo',
        ]
    }, {
        encodeValuesOnly: true
    })

    const [installation, categories] = await Promise.all([
        api({
            url: `/installation?${query}`,
            method: 'get'
        }),
		api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            installation: installation.data.data,
			categories: categories.data.data
        }
    }
}