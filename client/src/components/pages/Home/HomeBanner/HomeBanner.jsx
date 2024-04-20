import React, { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import s from './HomeBanner.module.scss'
import fixPopup from '../../../../../hooks/fixPopup'
import FormPopup from '@/components/common/FormPopup/FormPopup'
import useWindowSize from '../../../../../hooks/useWindowSize'

const HomeBanner = ({ title, advantages, backgroundImage, bannerImage }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	const [showForm, setShowForm] = useState(false)
	const { width } = useWindowSize()

	return (
		<div className={s.wrapper}>
			<div className='container'>
				<div className={s.banner__inner}>
					<div className={cn('flex', s.banner__content)}>
						<h1 className={s.banner__title}>{title}</h1>
						{width > 999 && (
							<div className={s.banner__items}>
								{advantages.map((item, idx) => (
									<div className={s.bannerItem} key={idx}>
										<div className={s.bannerItem__icon}>
											<Image
												src={imgPath + item.image.data.attributes.url}
												width={item.image.data.attributes.width}
												height={item.image.data.attributes.height}
												alt={
													item.image.data.attributes.alternativeText
														? item.image.data.attributes.alternativeText
														: item.image.data.attributes.name
												}
											/>
										</div>
										<div
											className={s.bannerItem__text}
											dangerouslySetInnerHTML={{ __html: item.text }}
										></div>
									</div>
								))}
							</div>
						)}
					</div>
					<div className={s.bannerBtnWrapper}>
						<Image
							className={s.image}
							src={imgPath + bannerImage.data.attributes.url}
							width={bannerImage.data.attributes.width}
							height={bannerImage.data.attributes.height}
							alt={'баннер'}
						/>
						<div onClick={() => setShowForm(true)}>
							<PrimaryButton>Оставить заявку</PrimaryButton>
						</div>
					</div>
					{width < 999 && (
						<div className={s.banner__items}>
							{advantages.map((item, idx) => (
								<div className={s.bannerItem} key={idx}>
									<div className={s.bannerItem__icon}>
										<Image
											src={imgPath + item.image.data.attributes.url}
											width={item.image.data.attributes.width}
											height={item.image.data.attributes.height}
											alt={
												item.image.data.attributes.alternativeText
													? item.image.data.attributes.alternativeText
													: item.image.data.attributes.name
											}
										/>
									</div>
									<div
										className={s.bannerItem__text}
										dangerouslySetInnerHTML={{ __html: item.text }}
									></div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<div className={s.background}>
				<Image src={imgPath + backgroundImage.data.attributes.url} fill={true} alt={'Фон'} />
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
				<FormPopup close={setShowForm} placeholderTextarea={'Количество камер, какой объект и тд.'} subject={'Оформить заявку: форма попап'}/>
			</Popup>
		</div>
	)
}

export default HomeBanner
