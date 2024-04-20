import React from 'react'
import api from '../../api'
import BlogPage from '@/components/pages/BlogPage/BlogPage'


const Index = ({ blog, blogItem }) => {
	return (
        <BlogPage blog={blog} blogItem={blogItem}/>
	)
}

export default Index

export async function getServerSideProps(ctx) {
	const [ blog, blogItem] = await Promise.all([
		
		api({
			url: '/news?populate=*',
			method: 'get'
		}),
		api({
			url: `/new/${ctx.query.slug}`,
			method: 'get'
		})
	])


	return {
		props: {
			blog: blog.data.data,
			blogItem: blogItem.data.data.attributes,
		}
	}
}
