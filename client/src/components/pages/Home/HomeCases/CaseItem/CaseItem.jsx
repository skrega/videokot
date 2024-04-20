import React, { useState } from 'react'
import s from './CaseItem.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import BasicButton from '@/components/common/BasicButton/BasicButton'

const CaseItem = ({ item }) => {
	// console.log(item)
	
	const imgPath = process.env.NEXT_PUBLIC_API
	const [checked, setChecked] = useState(false)

	return (
		<div className={cn('br-15', s.item, { [s.active]: checked })}>
			<div className={s.item__head}>
				<h4 className={cn('title-md text-center', s.item__title)}>{item.title}</h4>
				<label className={cn(s.toggle, checked ? s.active : '')}>
					<input
						className={s.toggle__checkbox}
						type='checkbox'
						tabindex='0'
						checked={item.title !== undefined ? checked : checked}
						onClick={() => {
							setChecked(!checked)
						}}
					/>
					<div className={s.toggle__switch}></div>
				</label>
			</div>
			<div className={s.item__content}>
				<p className={cn(s.item__text, 'text')}>{item.text}</p>
				<BasicButton
					children={'Подробнее'}
					href={item.complect.data !== null ? '/complect/'+item.complect.data.attributes.slug : '#'}
				/>
			</div>
			<Image
				className={s.item__img}
				src={imgPath + item.image.data.attributes.url}
				width={item.image.data.attributes.width}
				height={item.image.data.attributes.height}
				alt={item.title}
			/>
		</div>
	)
}

export default CaseItem
