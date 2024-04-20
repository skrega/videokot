import React, { useState } from 'react'
import s from './BlogList.module.scss'
import cn from 'classnames'
// import BlogItem from '../BlogItem/BlogItem'
import { useRouter } from 'next/router'
import LoadMoreBtn from '@/components/common/LoadMoreBtn/LoadMoreBtn'
import Card from '@/components/common/Card/Card'
import getTitle from '../../../../../hooks/getTitleTemplatePages'

const BlogList = ({ blog, pagination }) => {
	ыч
	const type = router.query.type
	const perPage = 6
	const total = pagination.pagination.total
	const items = router.query.items ? router.query.items : perPage
	const handleType = type => {
		void router.push({ query: { type: type } }, {}, { shallow: false, scroll: false })
	}
	const types = [
		{
			slug: 'article',
			title: 'Статьи'
		},
		{
			slug: 'reviews',
			title: 'Обзоры'
		},
		{
			slug: 'consultations',
			title: 'Консультации специалистов'
		}
	]
	const [open, setOpen] = useState(false)
	return (
		<div className={cn('section', s.wrapper)}>
			<h1 className={cn('title-l color-white', s.title)}>{getTitle()}</h1>
			{router.pathname == '/blog' && (
				<div className={cn('tabs flex', s.tabs, open && s.opened)}>
					<div
						className={cn(
							'tab',
							s.tab,
							(type === undefined || type === '') && s.active + ' active'
						)}
						onClick={() => void router.push({ query: '' }, {}, { shallow: false, scroll: false })}
					>
						Все
					</div>
					{types.map((item, idx) => (
						<div
							key={idx}
							className={cn('tab', s.tab, type === item.slug && s.active + ' active')}
							onClick={() => handleType(item.slug)}
						>
							{item.title}
						</div>
					))}
					<button className={cn(s.tabs__btn)} onClick={() => setOpen(prev => !prev)}>
						<svg
							width='14'
							height='9'
							viewBox='0 0 14 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12.659 0.62029C12.7248 0.555491 12.8142 0.519043 12.9075 0.519043C13.0008 0.519043 13.0903 0.555491 13.156 0.62029L13.8979 1.34593C13.9655 1.40804 14.0039 1.49477 14.0039 1.58553C14.0039 1.67629 13.9655 1.76302 13.8979 1.82513L7.46584 8.11631C7.36749 8.21262 7.23406 8.26679 7.09489 8.26691H6.91292C6.77375 8.26679 6.64032 8.21262 6.54198 8.11631L0.109951 1.82513C0.0422878 1.76302 0.0039053 1.67629 0.0039053 1.58553C0.0039053 1.49477 0.0422878 1.40804 0.109951 1.34593L0.851838 0.62029C0.917547 0.555491 1.00699 0.519043 1.1003 0.519043C1.19361 0.519043 1.28306 0.555491 1.34876 0.62029L7.00391 6.1516L12.659 0.62029Z'
								fill='black'
							/>
						</svg>
					</button>
				</div>
			)}
			{blog.length > 0 ? (
				<div className={cn('grid', s.items)}>
					{blog.map((item, idx) => (
						<Card
							item={item.attributes}
							url={router.pathname}
							preview={item.attributes.thumbnail}
							title={item.attributes.titleH1}
							key={idx}
						/>
					))}
				</div>
			) : (
				<p className={'empty__text text text-center color-white'}>Ничего не найдено</p>
			)}
			{total > items && (
				<div className={cn('center-block', s.inner__btn)}>
					<div
						onClick={() =>
							void router.push(
								{
									query: {
										type: type,
										items: Number(items) + perPage
									}
								},
								{},
								{ shallow: false, scroll: false }
							)
						}
					>
						<LoadMoreBtn />
					</div>
				</div>
			)}
		</div>
	)
}

export default BlogList
