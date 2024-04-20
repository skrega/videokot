import React from 'react'
import api from '../../api'
import Blog from '@/components/pages/Blog/Blog'

const Index = ({ blog, pagination }) => {
	return <Blog blog={blog} pagination={pagination} />
}

export default Index

export async function getServerSideProps(ctx) {
	let items = 'pagination[limit]=6&'
	
	if (ctx.query.items !== undefined) {
		items = 'pagination[limit]=' + ctx.query.items + '&'
	}
	const [ blog ] = await Promise.all([
		api({
			url: `/news?${items}populate=*`,
			method: 'get'
		})
	])
	return {
		props: {
			blog: blog.data.data,
			pagination: blog.data.meta
		}
	}
}

