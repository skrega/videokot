import React from 'react'
import s from './InstructionsList.module.scss'
import cn from 'classnames'
import Card from '@/components/common/Card/Card'
import LoadMoreBtn from '@/components/common/LoadMoreBtn/LoadMoreBtn'
import { useRouter } from 'next/router'

const InstructionsList = ({ instructions, pagination }) => {
	const router = useRouter()
	const perPage = 6
	const total = pagination.pagination.total
	const items = router.query.items ? router.query.items : perPage
	return (
		<div className={cn('section', s.wrapper)}>
			<h1 className={cn('title-l color-white mb-3', s.title)}>Инструкции</h1>
			{instructions.length > 0 ? (
				<div className={cn('grid grid-3', s.items)}>
					{instructions.map((item, idx) => (
						<Card
							item={item.attributes}
							url={'instructions'}
							preview={item.attributes.preview}
							title={item.attributes.title}
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

export default InstructionsList
