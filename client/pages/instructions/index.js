import React from 'react'
import api from '../../api'
import Instructions from '@/components/pages/Instructions/Instructions'

const Index = ({ instructions, pagination,categories }) => {
	return <Instructions instructions={instructions} pagination={pagination} categories={categories}/>
}

export default Index

export async function getServerSideProps(ctx) {
	let items = 'pagination[limit]=6&'

	if (ctx.query.items !== undefined) {
		items = 'pagination[limit]=' + ctx.query.items + '&'
	}
	const [ instructions, categories ] = await Promise.all([
		api({
			url: `/instructions?${items}populate=*`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])
	return {
		props: {
			instructions: instructions.data.data,
			pagination: instructions.data.meta,
			categories: categories.data.data
		}
	}
}
