import React from 'react'
import api from '../api'
import Guarantee from '@/components/pages/Guarantee/Guarantee';

const Index = ({guarantee, categories}) => {
    return <Guarantee guarantee={guarantee} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'mainInfo',
            'topImg',
            'middleImg',
            'bottomImg',
            'bannerImg'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [guarantee, categories] = await Promise.all([
        api({
            url: `/guarantee?${query}`,
            method: 'get'
        }),
		api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            guarantee: guarantee.data.data,
			categories: categories.data.data
        }
    }
}