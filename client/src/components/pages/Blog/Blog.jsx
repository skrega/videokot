import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import BlogList from './BlogList/BlogList'
import getTitle from '../../../../hooks/getTitleTemplatePages'

const Blog = ({ blog, pagination, categories }) => {
	
	return (
		<div className='bg-archive'>
			<LayoutContainer categories={categories} title={getTitle()} description={'Блог'}>
				<div className='container'>
					<BlogList blog={blog} pagination={pagination} />
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Blog
