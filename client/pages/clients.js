import React from 'react'
import api from '../api'
import Client from '@/components/pages/Client/Client';

const Index = ({client, categories}) => {
    return <Client client={client} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'mainInfo',
            'clientsLogos',
            'aboutClient.images'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [client, categories] = await Promise.all([
        api({
            url: `/client?${query}`,
            method: 'get'
        }),
		api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            client: client.data.data,
            categories: categories.data.data
        }
    }
}