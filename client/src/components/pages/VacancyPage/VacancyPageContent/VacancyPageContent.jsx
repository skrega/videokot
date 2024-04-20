import React, { useState } from 'react'
import s from './VacancyPageContent.module.scss'
import cn from 'classnames'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import Image from 'next/image'
import BasicButtonDark from '@/components/common/BasicButtonDark/BasicButtonDark'
import useWindowSize from '../../../../../hooks/useWindowSize'
import Popup from 'reactjs-popup'
import fixPopup from '../../../../../hooks/fixPopup'
import FormVacancy from '@/components/common/FormVacancy/FormVacancy'

const VacancyPageContent = ({ vacancyItem }) => {
	const { width } = useWindowSize()
	const [showForm, setShowForm] = useState(false)
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<div className={cn('section', s.wrapper)}>
			<div className='container'>
				<h1 className={cn('title-l', s.title)}>{vacancyItem.titleH1}</h1>
				<h4 className={cn('text-l bolder color-primary', s.price)}>{vacancyItem.salary}</h4>
				<div className={cn('text', s.description__list)}>
					<div
						className={cn(s.col, s.description__listItem)}
						dangerouslySetInnerHTML={{ __html: vacancyItem.information }}
					></div>
					<div className={cn(s.col, s.description__listItem)}>
						<p>{vacancyItem.companyName}</p>
						<p>{vacancyItem.address}</p>
					</div>
					{width < 767 && (
						<div className={s.about__btn} onClick={() => setShowForm(true)}>
							<PrimaryButton>Откликнуться</PrimaryButton>
						</div>
					)}
				</div>
				<div className={cn(s.about, s.description__list)}>
					{vacancyItem.aboutJob && (
						<div className={cn(s.col, s.about__item)}>
							<h2 className={cn('title-md bolder', s.about__title)}>Работа и обязанности</h2>
							<div
								className={cn('list text', s.about__content)}
								dangerouslySetInnerHTML={{ __html: vacancyItem.aboutJob }}
							></div>
						</div>
					)}
					{vacancyItem.requirements && (
						<div className={cn(s.col, s.about__item)}>
							<h2 className={cn('title-md bolder', s.about__title)}>Требования</h2>
							<div className={s.about__content}>
								<div
									className='list text'
									dangerouslySetInnerHTML={{ __html: vacancyItem.requirements }}
								></div>
								{width > 767 && (
									<div className={s.about__btn} onClick={() => setShowForm(true)}>
										<PrimaryButton>Откликнуться</PrimaryButton>
									</div>
								)}
							</div>
						</div>
					)}
				</div>

				<div className={s.description}>
					{vacancyItem.description && (
						<div
							className={cn('text list', s.description__text)}
							dangerouslySetInnerHTML={{ __html: vacancyItem.description }}
						></div>
					)}

					<div className={s.description__images}>
						{vacancyItem.media.data.map((item, idx) => (
							<Image
								className={cn('br-15', s.description__img)}
								key={idx}
								src={imgPath + item.attributes.url}
								width={item.attributes.width}
								height={item.attributes.height}
								alt={'Изображение ' + idx}
							/>
						))}
					</div>
				</div>

				<div className={s.footer}>
					<h3 className={cn('bolder text-center', s.footer__title)}>{vacancyItem.bottomTitle}</h3>
					<div className={s.footer__content}>
						{vacancyItem.bottomImg.data && (
							<Image
								className={cn('br-15', s.footer__img)}
								src={imgPath + vacancyItem.bottomImg.data.attributes.url}
								width={vacancyItem.bottomImg.data.attributes.width}
								height={vacancyItem.bottomImg.data.attributes.height}
								alt={'Условия работы'}
							/>
						)}
						<div className={s.footer__col}>
							{vacancyItem.workingConditions && (
								<div className={s.footer__text}>
									<h5 className={cn(' bolder title-md', s.footer__subtitle, s.about__title)}>
										Условия работы
									</h5>
									<div
										className='list text'
										dangerouslySetInnerHTML={{ __html: vacancyItem.workingConditions }}
									></div>
								</div>
							)}
							{width > 999 && (
								<div className={cn('flex', s.footer__buttons)}>
									<div className={s.about__btn} onClick={() => setShowForm(true)}>
										<PrimaryButton>Откликнуться</PrimaryButton>
									</div>
									<BasicButtonDark href='/contacts'>Контакты</BasicButtonDark>
								</div>
							)}
						</div>
					</div>
					{width < 999 && (
						<div className={cn('flex', s.footer__buttons)}>
							<div className={s.footer__btn} onClick={() => setShowForm(true)}>
								<PrimaryButton>Откликнуться</PrimaryButton>
							</div>
							<div className={s.footer__btn}>
								<BasicButtonDark href='/contacts'>Контакты</BasicButtonDark>
							</div>
						</div>
					)}
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
				<FormVacancy close={setShowForm} vacancyName={vacancyItem.titleH1} />
			</Popup>
		</div>
	)
}

export default VacancyPageContent
