import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import React from 'react'
import s from './Payment.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import PaymentBoxIcon from '@/components/icons/PaymentBoxIcon'

const Payment = ({ payment, categories }) => {
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<div className='header-bg'>
			<LayoutContainer
				categories={categories}
				title={payment.attributes.meta_title}
				description={payment.attributes.meta_description}
			>
				<section className={s.wrapper}>
					<div className='container'>
						<h1 className={cn('title-l', s.title)}>{payment.attributes.title}</h1>
						<div className={s.inner}>
							<div className={cn('br-15', s.box)}>
								<PaymentBoxIcon />
								<h4 className={cn('title-md color-white', s.box__title)}>
									{payment.attributes.text}
								</h4>
								<ul className={s.box__items}>
									{payment.attributes.paymentItems.map((item, idx) => (
										<li className={cn('flex', s.item)} key={idx}>
											<Image
												className={s.item__icon}
												src={imgPath + item.image.data.attributes.url}
												width={item.image.data.attributes.width}
												height={item.image.data.attributes.height}
												alt={item.title}
											/>
											<p className={cn('color-white text', s.item__title)}>{item.text}</p>
										</li>
									))}
								</ul>
							</div>
							<div className={s.image}>
								<Image
									src={imgPath + payment.attributes.image.data.attributes.url}
									width={payment.attributes.image.data.attributes.width}
									height={payment.attributes.image.data.attributes.height}
									alt={payment.attributes.title}
								/>
							</div>
						</div>
					</div>
				</section>
			</LayoutContainer>
		</div>
	)
}

export default Payment
