import React from 'react'
import api from '../api'
import About from '@/components/pages/About/About';

const Index = ({ about, categories} ) => {
    return <About about={about} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'logo'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [about, categories] = await Promise.all([
        api({
            url: `/about?${query}`,
            method: 'get'
        }),
        api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            about: about.data.data,
            categories: categories.data.data
        }
    }
}