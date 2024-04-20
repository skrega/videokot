import React from 'react'
import api from '../api'
import Contacts from '@/components/pages/Contacts/Contacts';

const Index = ({contact, categories}) => {
    return <Contacts contact={contact} categories={categories} />
}

export default Index;

export async function getServerSideProps(ctx) {
    const qs = require('qs')
    const query = qs.stringify({
        populate: [
            // 'image'
        ]
    }, {
        encodeValuesOnly: true
    })

    const [contact,categories] = await Promise.all([
        api({
            url: `/contact?${query}`,
            method: 'get'
        }),
        api({ url: '/categories?populate=img', method: 'get' })
    ])

    return {
        props: {
            contact: contact.data.data,
            categories: categories.data.data
        }
    }
}