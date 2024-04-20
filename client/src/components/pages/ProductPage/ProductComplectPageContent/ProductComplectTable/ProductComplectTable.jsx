import React from 'react'
import s from './ProductComplectTable.module.scss'
import cn from 'classnames'
import formatPrice from '../../../../../../hooks/formatPrice'
import useWindowSize from '../../../../../../hooks/useWindowSize'

const ProductComplectTable = ({ table }) => {
	const { width } = useWindowSize()
	return (
		<>
			{table.map((tableItem, idx) => (
				<div key={idx}>
					<h5 className={cn('bolder text', s.table__title)}>{tableItem.titleTable}</h5>
					<div className={s.table}>
						<div className={cn('text-sm color-white bolder', s.table__head, s.table__row)}>
							<div className={s.table__col}>
								{tableItem.id == 1 ? 'Материалы и оборудование' : 'Вид работ'}
							</div>
							{width > 767 && <div className={s.table__col}>Ед. изм.</div>}
							{width > 767 && <div className={s.table__col}>Количество</div>}
							<div className={s.table__col}>Цена</div>
							<div className={s.table__col}>Сумма</div>
						</div>
						<div className={s.table__content}>
							{tableItem.tableRow.map((item, idx) => (
								<div className={cn('text', s.table__row, s.table__contentRow)} key={idx}>
									<div className={s.table__col}>
										{item.productOrServices}
										{width < 767 && ' (' + item.count + item.unit + ')'}
									</div>
									{width > 767 && <div className={s.table__col}>{item.unit}</div>}
									{width > 767 && <div className={s.table__col}>{item.count}</div>}
									<div className={s.table__col}>{formatPrice(item.price)} ₽</div>
									<div className={s.table__col}>{formatPrice(item.total)} ₽</div>
								</div>
							))}
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default ProductComplectTable
