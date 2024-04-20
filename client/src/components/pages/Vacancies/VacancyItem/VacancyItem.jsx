import React, { useState } from 'react'
import s from './VacancyItem.module.scss'
import cn from 'classnames'
import A from '@/components/common/A'
import BasicButton from '@/components/common/BasicButton/BasicButton'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import Popup from 'reactjs-popup'
import FormVacancy from '@/components/common/FormVacancy/FormVacancy'
import fixPopup from '../../../../../hooks/fixPopup'

const VacancyItem = ({ item }) => {
	const [showForm, setShowForm] = useState(false)
	return (
		<article className={cn('color-white br-15', s.item)}>
			<h4 className={cn('title-md medium', s.item__title)}>{item.title}</h4>
			<div className={cn('title-md bolder', s.item__price)}>{item.salary}</div>
			<div className={s.item__content}>
				<div className={cn('text', s.item__subtitle)}
                dangerouslySetInnerHTML={{ __html: item.information }}></div>
				<p className={cn('text', s.item__subtitle)}>
					{item.companyName} <br />
					{item.address}
				</p>
			</div>
			<div className={s.item__buttons}>
				<BasicButton href={'vacancies/' + item.slug}>Подробнее</BasicButton>
				<div className={s.item__btn} onClick={() => setShowForm(true)}>
					<PrimaryButton>Откликнуться</PrimaryButton>
				</div>
			</div>
			<Popup
				className={'form__popup'}
				modal={true}
				open={showForm}
				onOpen={() => {
					fixPopup(true)
					setShowForm(true)
				}}
				onClose={() => {
					setShowForm(false)
					fixPopup(false)
				}}
			>
				<FormVacancy close={setShowForm} vacancyName={item.titleH1} />
			</Popup>
		</article>
	)
}

export default VacancyItem
