import React from 'react'
import api from '../api'
import Faq from '@/components/pages/Faq/Faq';

const Index = ({faq, categories}) => {
    return <Faq faq={faq} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'faqItems',
        ]
    }, {
        encodeValuesOnly: true
    })

    const [faq, categories] = await Promise.all([
        api({
            url: `/faq?${query}`,
            method: 'get'
        }),
        api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            faq: faq.data.data,
            categories: categories.data.data
        }
    }
}