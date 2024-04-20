import React, { useState } from 'react'
import cn from 'classnames'
import s from './Guarantee.module.scss'
import Image from 'next/image'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import useWindowSize from '../../../../hooks/useWindowSize'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import Popup from 'reactjs-popup'
import fixPopup from '../../../../hooks/fixPopup'
import FormPopup from '@/components/common/FormPopup/FormPopup'

const Guarantee = ({ guarantee, categories }) => {
	const [showForm, setShowForm] = useState(false)
	const { width } = useWindowSize()
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={guarantee.attributes.mainInfo.meta_title} description={guarantee.attributes.mainInfo.meta_description}>
				<div className='section'>
					<div className='container'>
						<h1 className={cn('title-l', s.title)}>{guarantee.attributes.mainInfo.title}</h1>
						<div
							className={cn('text medium', s.top__text)}
							dangerouslySetInnerHTML={{ __html: guarantee.attributes.text }}
						></div>
						<Image
							className={cn(s.top__img, 'br-15')}
							src={imgPath + guarantee.attributes.topImg.data.attributes.url}
							width={guarantee.attributes.topImg.data.attributes.width}
							height={guarantee.attributes.topImg.data.attributes.height}
							alt={guarantee.attributes.mainInfo.title}
						/>
						<div className={cn('grid', s.middle__content)}>
							<div className={s.middle__col}>
								<p className={cn('title-md', s.middle__text)}>{guarantee.attributes.textLeft}</p>
								<Image
									className={cn('br-15', s.middle__img)}
									src={imgPath + guarantee.attributes.middleImg.data.attributes.url}
									width={guarantee.attributes.middleImg.data.attributes.width}
									height={guarantee.attributes.middleImg.data.attributes.height}
									alt={'Команда'}
								/>
							</div>
							<div className={s.middle__col}>
								<p className={cn('title-md', s.middle__text)}>{guarantee.attributes.textRight}</p>
								<div
									className={cn('text medium', s.middle__list)}
									dangerouslySetInnerHTML={{ __html: guarantee.attributes.list }}
								></div>
							</div>
						</div>
						<div className={cn('grid', s.bottom__content)}>
							<div className={cn('title-md', s.bottom__col)}>
								<div
									className={s.bottom__text}
									dangerouslySetInnerHTML={{ __html: guarantee.attributes.middleText }}
								></div>
								<p className={cn('bolder', s.bottom__subtitle)}>
									{guarantee.attributes.middleSubtitle}
								</p>
							</div>
							<Image
								className={cn('br-15', s.bottom__img)}
								src={imgPath + guarantee.attributes.bottomImg.data.attributes.url}
								width={guarantee.attributes.bottomImg.data.attributes.width}
								height={guarantee.attributes.bottomImg.data.attributes.height}
								alt={'Установка'}
							/>
						</div>
						<div
							className={cn('br-15 title-md color-white text-center', s.banner)}
							style={{
								backgroundImage: `url(${imgPath + guarantee.attributes.bannerImg.data.attributes.url})`
							}}
						>
							<div className={s.banner__content}>
								<h5 className={cn('s-bold title-md', s.banner__title)}>
									{guarantee.attributes.bannerTitle}
								</h5>
								<p className={cn('medium title-md', s.banner__text)}>
									{guarantee.attributes.bannerText}
								</p>

								<div className={s.banner__btn} onClick={() => setShowForm(true)}>
									<PrimaryButton>Оставить заявку</PrimaryButton>
								</div>
							</div>
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
						<FormPopup close={setShowForm}/>
					</Popup>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Guarantee
