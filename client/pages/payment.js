import React from 'react'
import api from '../api'
import Payment from '@/components/pages/Payment/Payment';

const Index = ({ payment, categories}) => {
    return <Payment payment={payment} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'paymentItems.image',
            'image'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [payment,categories] = await Promise.all([
        api({
            url: `/payment?${query}`,
            method: 'get'
        }),
        api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            payment: payment.data.data,
			categories: categories.data.data
        }
    }
}