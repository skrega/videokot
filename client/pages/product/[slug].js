import React from 'react'
import api from '../../api'
import ProductPage from '@/components/pages/ProductPage/ProductPage'



const Index = ({ product, productItem, categories }) => {
	return (
        <ProductPage product={product} productItem={productItem} categories={categories}/>
	)
}

export default Index

export async function getServerSideProps(ctx) {
	const [ product, productItem, categories] = await Promise.all([
		
		api({
			url: '/products?populate=*',
			method: 'get'
		}),
		api({
			url: `/product/${ctx.query.slug}?populate=*`,
			method: 'get'
		}),
		api({ url: '/categories?populate=img', method: 'get' })
	])


	return {
		props: {
			product: product.data.data,
			productItem: productItem.data.data,
			categories: categories.data.data
		}
	}
}
