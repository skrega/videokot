import React from 'react'
import s from './Installation.module.scss'
import cn from 'classnames'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import BgImage from '../../../images/installation-bg.jpg'

const Installation = ({ installation, categories }) => {
	return (
		<div className={cn('bg-img', s.background)} style={{ backgroundImage: `url(${BgImage.src})` }}>
			<LayoutContainer categories={categories} title={installation.attributes.mainInfo.meta_title}
			description={installation.attributes.mainInfo.meta_title}>
				<section className={cn(s.wrapper, 'section color-white')}>
					<div className='container'>
						<div className={cn('grid', s.inner)}>
							<div class={s.col__left}>
								<h1 className={cn('title-l', s.title)}>{installation.attributes.mainInfo.title}</h1>
								<div class={s.box}>
									<div className={s.box__inner}>
										<p className={s.box__text}>{installation.attributes.text}</p>
									</div>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							<div class={s.col__right}>
								<ol>
									{installation.attributes.installationItems.map((item, idx) => (
										<li className={s.item} key={idx}>
											<h4 class={cn('title-md', s.item__title)}>
												<div className='item__number'>{++idx}</div>
												{item.title}
											</h4>
											{item.text && <p className={cn('text', s.item__text)}>{item.text}</p>}
										</li>
									))}
								</ol>
							</div>
						</div>
					</div>
				</section>
			</LayoutContainer>
		</div>
	)
}

export default Installation
