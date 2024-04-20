import React from 'react'
import api from '../api'
import Privacy from '@/components/pages/Privacy/Privacy';

const Index = ({privacy, categories}) => {
    return <Privacy privacy={privacy} categories={categories}
    />
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'mainInfo'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [privacy, categories] = await Promise.all([
        api({
            url: `/privacy-policy?${query}`,
            method: 'get'
        }),
        api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            privacy: privacy.data.data,
            categories: categories.data.data
        }
    }
}