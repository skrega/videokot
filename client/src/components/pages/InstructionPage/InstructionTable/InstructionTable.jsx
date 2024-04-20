import React from 'react'
import s from '../InstructionPageContent/InstructionPageContent.module.scss'
import cn from 'classnames'

const InstructionTable = ({ item }) => {
	return (
		<div className={s.table}>
			<div className={cn(s.table__item, s.table__head)}>
				<div className={cn(s.table__title, s.table__stub)}></div>
				<div className={cn(s.table__title, s.table__box)}>{item.columnName}</div>
			</div>
			<div className={cn(s.table__item, s.table__row)}>
				<div className={cn('s-bold', s.table__col, s.table__box, s.table__nameBenefits)}>
					<span>Преимущества</span>
				</div>
				<div className={cn(s.table__content, s.table__box)}>
					<ol className={s.table__list}>
						{item.listBenefits.map((list, idx) => (
							<li key={idx}>
								<span>{++idx}.</span>
								{list.text}
							</li>
						))}
					</ol>
				</div>
			</div>
			<div className={cn(s.table__item, s.table__row)}>
				<div className={cn('s-bold', s.table__col, s.table__box, s.table__nameFlaws)}>
					<span>Недостатки</span>
				</div>
				<div className={cn(s.table__content, s.table__box)}>
					<ol className={s.table__list}>
						{item.listFlaws.map((list, idx) => (
							<li key={idx}>
								<span>{++idx}.</span>
								{list.text}
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	)
}

export default InstructionTable
