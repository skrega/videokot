import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import s from './About.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import BgImage from '../../../images/about-bg.jpg'
import AboutImg from '../../../images/17_07_23.png'

const About = ({ about, categories }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<div className={s.page__wrapper} style={{ backgroundImage: `url(${BgImage.src})` }}>
			<LayoutContainer categories={categories} title={about.attributes.meta_title} description={about.attributes.meta_description}>
				<section className={cn('color-white section', s.wrapper)}>
					<div className='container'>
						<h1 className={cn('title-l', s.title)}>{about.attributes.title}</h1>
						<div className={cn('flex', s.head)}>
							<Image
								className={s.logo}
								src={imgPath + about.attributes.logo.data.attributes.url}
								width={about.attributes.logo.data.attributes.width}
								height={about.attributes.logo.data.attributes.height}
								alt={about.attributes.title}
							/>
							<p className={cn('text', s.head__text)}>{about.attributes.text}</p>
						</div>
						<div className={s.middle__content}>
							<h2
								className={cn('bolder text-center', s.middle__title)}
								dangerouslySetInnerHTML={{ __html: about.attributes.aboutTitle }}
							></h2>
							<p className={cn('text', s.subtitle)}>{about.attributes.subtitle}</p>
						</div>
						<div className={cn('grid', s.text__content)}>
							<div
								className={cn('br-15 medium text', s.text__col)}
								dangerouslySetInnerHTML={{ __html: about.attributes.textColLeft }}
							></div>
							<div
								className={cn('br-15 medium text', s.text__col)}
								dangerouslySetInnerHTML={{ __html: about.attributes.textColRight }}
							></div>
						</div>
						<div className={s.video__wrapper}>
							<h4
								className={cn('title bolder text-center', s.video__title)}
								dangerouslySetInnerHTML={{ __html: about.attributes.titleVideo }}
							></h4>
							<div className={s.video}>
								<iframe
									src={about.attributes.linkVideo}
									frameborder='0'
									width='100%'
									height='100%'
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</section>
				<Image className={s.image} src={AboutImg} full={true} alt={'Камера'} />
			</LayoutContainer>
		</div>
	)
}

export default About
