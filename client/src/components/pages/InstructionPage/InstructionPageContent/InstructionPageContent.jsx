import React from 'react'
import s from './InstructionPageContent.module.scss'
import cn from 'classnames'
import InstructionTable from '../InstructionTable/InstructionTable'
import useWindowSize from '../../../../../hooks/useWindowSize'

const InstructionPageContent = ({ item }) => {
	const { width } = useWindowSize()
	return (
		<section className={cn('section', s.wrapper)}>
			<div className={s.inner}>
				<div className={s.head}>
					<h1 className={cn('title-l mb-3', s.title)}>{item.title}</h1>
					<div
						className={cn('text', s.head__text)}
						dangerouslySetInnerHTML={{ __html: item.topText }}
					></div>
				</div>

				{width > 767 ? (
					(item.table.length !== 0) && (
						<div className={s.table}>
							<div className={cn(s.table__item, s.table__head)}>
								<div className={cn(s.table__title, s.table__stub)}></div>
								{item.table.map((item, idx) => (
									<div className={cn(s.table__title, s.table__box)} key={idx}>
										{item.columnName}
									</div>
								))}
							</div>
							<div className={cn(s.table__item, s.table__row)}>
								<div className={cn('s-bold', s.table__col, s.table__box, s.table__nameBenefits)}>
									<span>Преимущества</span>
								</div>
								{item.table.map((item, idx) => (
									<div className={cn(s.table__content, s.table__box)} key={idx}>
										<ol className={s.table__list}>
											{item.listBenefits.map((list, idx) => (
												<li key={idx}>
													<span>{++idx}.</span>
													{list.text}
												</li>
											))}
										</ol>
									</div>
								))}
							</div>
							<div className={cn(s.table__item, s.table__row)}>
								<div className={cn('s-bold', s.table__col, s.table__box, s.table__nameFlaws)}>
									<span>Недостатки</span>
								</div>
								{item.table.map((item, idx) => (
									<div className={cn(s.table__content, s.table__box)} key={idx}>
										<ol className={cn(s.table__list, item.listFlaws.length == 1 ? s.single : '')}>
											{item.listFlaws.map((list, idx) => (
												<li key={idx}>
													<span>{++idx}.</span>
													{list.text}
												</li>
											))}
										</ol>
									</div>
								))}
							</div>
						</div>
					)
				) : (
					(item.table.length !== 0) && (<div className={s.table__items}>
						{item.table.map((item, idx) => (
							<InstructionTable item={item} />
						))}
					</div>)
				)}
				<div
					className={cn('list text', s.content)}
					dangerouslySetInnerHTML={{ __html: item.content }}
				></div>
			</div>
		</section>
	)
}

export default InstructionPageContent
