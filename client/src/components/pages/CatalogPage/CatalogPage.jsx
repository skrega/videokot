import React, { useState } from 'react'
import s from './CatalogPage.module.scss'
import cn from 'classnames'
import A from '@/components/common/A'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import ProductCard from '../Product/ProductCard/ProductCard'
import { useRouter } from 'next/router'
import CatalogDescription from './CatalogDescription/CatalogDescription'
import CardsIcon from '@/components/icons/CardsIcon'
import ListIcon from '@/components/icons/ListIcon'
import useWindowSize from '../../../../hooks/useWindowSize'
import FilterButton from '@/components/common/FilterButton/FilterButton'
import FilterProducts from '@/components/common/FilterProducts/FilterProducts'
import { useSelector } from 'react-redux'

const CatalogPage = ({
	category,
	categoryItem,
	products,
	complects,
	pagination,
	categories,
	finalProductAttributes,
	handleAttributeChange,
	selectedAttributes,
	handleResetFilters
}) => {
	const { width } = useWindowSize()
	const router = useRouter()
	const type = router.query.slug
	const perPage = 9
	// const total = pagination.pagination.total
	const items = router.query.items ? router.query.items : perPage
	// const handleType = type => {
	// 	void router.push({ query: { type: type } }, {}, { shallow: false, scroll: false })
	// }
	// const [open, setOpen] = useState(false)
	const [viewMode, setViewMode] = useState('grid')

	const filteredProducts = useSelector(state => state.filter.filteredProducts)

	return (
		<div className={cn(s.wrapper, type === 'sets' ? s.bg_dark : '')}>
			<LayoutContainer categories={category}>
				{categoryItem.description.length > 0 && (
					<div className='container-fluid'>
						{categoryItem.description && (
							<CatalogDescription content={categoryItem.description[0]} />
						)}
					</div>
				)}
				<div className='container'>
					<div className={cn('flex', s.head)}>
						{width > 1279 ? (
							<div className={cn('tabs flex', s.category__nav)}>
								{category.map((item, idx) => (
									<A
										href={item.attributes.slug}
										className={cn(type === item.attributes.slug ? 'active' : '', 'tab', s.tab)}
										key={idx}
									>
										{item.attributes.title}
									</A>
								))}
							</div>
						) : (
							<FilterButton />
						)}
						<div className={cn('flex', s.view__mode)}>
							<button
								className={cn(s.view__modeBtn, s.mode__card)}
								onClick={() => setViewMode('grid')}
							>
								<CardsIcon />
							</button>
							<button
								className={cn(s.view__modeBtn, s.mode__list)}
								onClick={() => setViewMode('list')}
							>
								<ListIcon />
							</button>
						</div>
					</div>
					<div className={cn('grid section', s.inner, s.isFilter)}>
						{width > 1279 && (
							<div className={s.filter}>
								<FilterProducts
									products={products}
									finalProductAttributes={finalProductAttributes}
								/>
							</div>
						)}
						<div className={s.wrapper__items}>
							<div className={cn(s.items, viewMode === 'list' ? s.list : '')}>
								{filteredProducts.length > 0
									? filteredProducts.map((item, idx) => (
											<ProductCard product={item} url={'/product/'} key={idx} viewMode={viewMode} />
										))
									: products.map((item, idx) => (
											<ProductCard product={item} url={'/product/'} key={idx} viewMode={viewMode} />
										))}
								{complects &&
									complects.map((item, idx) => (
										<ProductCard product={item} url={'/complect/'} key={idx} viewMode={viewMode} />
									))}
							</div>
						</div>
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default CatalogPage
