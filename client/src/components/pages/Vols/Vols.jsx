import React, { useState } from 'react'
import s from './Vols.module.scss'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import cn from 'classnames'
import Image from 'next/image'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import Popup from 'reactjs-popup'
import fixPopup from '../../../../hooks/fixPopup'
import FormPopup from '@/components/common/FormPopup/FormPopup'

const Vols = ({ vols, categories }) => {
	const [showForm, setShowForm] = useState(false)
	const imgPath = process.env.NEXT_PUBLIC_API

	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories}>
				<div className={cn('section', s.wrapper)}>
					<div className='container'>
						<h1 className={cn('title-l', s.title)}>{vols.attributes.mainInfo.title}</h1>
						<div className={s.media}>
							<Image
								className={cn('br-15', s.media__img)}
								src={imgPath + vols.attributes.media.data.attributes.url}
								width={vols.attributes.media.data.attributes.width}
								height={vols.attributes.media.data.attributes.height}
								alt={'ВОЛС и СКС'}
							/>
							<div className='playBtn'></div>
						</div>
						<div className={s.content}>
							<div className={cn('text grid', s.top__content)}>
								<div
									className={s.top__left}
									dangerouslySetInnerHTML={{ __html: vols.attributes.leftColText }}
								></div>
								<div className={s.top__right}>
									<div dangerouslySetInnerHTML={{ __html: vols.attributes.rightColText }}></div>
									<Image
										className={cn('br-15', s.top__rightImg)}
										src={imgPath + vols.attributes.rightImage.data.attributes.url}
										width={vols.attributes.rightImage.data.attributes.width}
										height={vols.attributes.rightImage.data.attributes.height}
										alt={'Структурированная кабельная система'}
									/>
								</div>
							</div>
							<div className={cn('text grid', s.middle__content)}>
								<div className={s.middle__left}>
									<Image
										className={cn('br-15', s.middle__leftImg)}
										src={imgPath + vols.attributes.leftMiddleImg.data.attributes.url}
										width={vols.attributes.leftMiddleImg.data.attributes.width}
										height={vols.attributes.leftMiddleImg.data.attributes.height}
										alt={'Структурированная кабельная система'}
									/>
									<div
										className='title-md'
										dangerouslySetInnerHTML={{ __html: vols.attributes.leftMiddleText }}
									></div>
								</div>
								<div className={s.middle__right}>
									<div dangerouslySetInnerHTML={{ __html: vols.attributes.rightMiddleText }}></div>
									<Image
										className={cn('br-15', s.middle__rightImg)}
										src={imgPath + vols.attributes.rightMiddleImg.data.attributes.url}
										width={vols.attributes.rightMiddleImg.data.attributes.width}
										height={vols.attributes.rightMiddleImg.data.attributes.height}
										alt={'Волоконно-оптические линии связи'}
									/>
								</div>
							</div>
						</div>
						<div className={s.banner}>
							<h3 className={cn('text-center s-bold', s.banner__title)}>
								{vols.attributes.bannerTitle}
							</h3>
							<div
								className={cn('color-white br-15', s.banner__content)}
								style={{
									backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)), linear-gradient(180deg, rgba(231, 31, 42, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url(${imgPath + vols.attributes.bannerImg.data.attributes.url})`
								}}
							>
								<div className={cn('title-md text-center', s.banner__texts)}>
									<p className={cn('s-bold', s.banner__text)}>{vols.attributes.bannerTextTop}</p>
									<p className={cn('medium', s.banner__text)}>{vols.attributes.bannerTextBottom}</p>
								</div>
								<div className={s.banner__btn} onClick={() => setShowForm(true)}>
									<PrimaryButton>Оставить заявку</PrimaryButton>
								</div>
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
					<FormPopup close={setShowForm} placeholderTextarea={'Варка ВОЛС, строительство СКС, какой объект и тд.'} />
				</Popup>
			</LayoutContainer>
		</div>
	)
}

export default Vols
