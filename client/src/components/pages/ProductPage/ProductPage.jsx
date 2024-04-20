import React from 'react'
import ProductPageContent from './ProductPageContent/ProductPageContent'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import cn from 'classnames'
import s from './ProductPage.module.scss'


const ProductPage = ({ product, productItem, categories }) => {
	return (
		<div className={cn('bg-img', s.wrapper)}>
			<LayoutContainer categories={categories}>
				<div className='container'>
					<ProductPageContent productProps={product} item={productItem} categories={categories} />
				</div>
			</LayoutContainer>
		</div>
	)
}

export default ProductPage
