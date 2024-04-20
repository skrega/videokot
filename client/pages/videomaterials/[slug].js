import React from 'react'
import api from '../../api'
import BlogPage from '@/components/pages/BlogPage/BlogPage'


const Index = ({ blog, blogItem, categories }) => {
	return (
        <BlogPage blog={blog} blogItem={blogItem} categories={categories}/>
	)
}

export default Index

export async function getServerSideProps(ctx) {
	const [ blog, blogItem, categories] = await Promise.all([
		
		api({
			url: '/videomaterials?populate=*',
			method: 'get'
		}),
		api({
			url: `/videomaterial/${ctx.query.slug}`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])


	return {
		props: {
			blog: blog.data.data,
			blogItem: blogItem.data.data.attributes,
			categories: categories.data.data
		}
	}
}
