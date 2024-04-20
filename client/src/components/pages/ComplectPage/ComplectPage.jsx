import React from 'react'
import s from './ComplectPage.module.scss'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import ProductComplectPageContent from '../ProductPage/ProductComplectPageContent/ProductComplectPageContent'

const ComplectPage = ({ complect, complectItem, categories }) => {
	return (
		<div className={s.wrapper}>
			<LayoutContainer categories={categories}>
				<div className='container'>
					<ProductComplectPageContent complect={complect} item={complectItem} />
				</div>
			</LayoutContainer>
		</div>
	)
}

export default ComplectPage
