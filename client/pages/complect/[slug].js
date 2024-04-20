import React from 'react'
import api from '../../api'
import ComplectPage from '@/components/pages/ComplectPage/ComplectPage'



const Index = ({ complect, complectItem, categories }) => {
	return (
        <ComplectPage complect={complect} complectItem={complectItem} categories={categories}/>
	)
}

export default Index

export async function getServerSideProps(ctx) {
	const [ complect,  complectItem, categories ] = await Promise.all([
		
		api({
			url: '/complects?populate=*',
			method: 'get'
		}),
		api({
			url: `/complect/${ctx.query.slug}?populate=*`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])


	return {
		props: {
			complect: complect.data.data,
			complectItem: complectItem.data.data.attributes,
			categories: categories.data.data
		}
	}
}
