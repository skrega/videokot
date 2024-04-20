import React from 'react'
import api from '../../api'
import Blog from '@/components/pages/Blog/Blog'

const Index = ({ blog, pagination, categories }) => {
	return <Blog blog={blog} pagination={pagination} categories={categories} />
}

export default Index

export async function getServerSideProps(ctx) {
	let items = 'pagination[limit]=6&'
	if (ctx.query.items !== undefined) {
		items = 'pagination[limit]=' + ctx.query.items + '&'
	}
	const [ blog, categories ] = await Promise.all([
		api({
			url: `/videomaterials?${items}populate=*`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])
	return {
		props: {
			blog: blog.data.data,
			pagination: blog.data.meta,
			categories: categories.data.data
		}
	}
}

