import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import BlogPageContent from './BlogPageContent/BlogPageContent'

const BlogPage = ({ blog, blogItem, categories }) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={blogItem.meta_title} description={blogItem.meta_description}>
				<BlogPageContent blogItem={blogItem} />
			</LayoutContainer>
		</div>
	)
}

export default BlogPage
