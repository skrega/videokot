import React from 'react'
import api from '../api'
import Vols from '@/components/pages/Vols/Vols';


const Index = ({vols, categories}) => {
    return <Vols vols={vols} categories={categories}/>
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            'mainInfo',
            'media',
            'rightMiddleImg',
            'rightImage',
            'leftMiddleImg',
            'bannerImg'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [vols, categories] = await Promise.all([
        api({
            url: `/vols-more-detail?${query}`,
            method: 'get'
        }),
		api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            vols: vols.data.data,
			categories: categories.data.data
        }
    }
}