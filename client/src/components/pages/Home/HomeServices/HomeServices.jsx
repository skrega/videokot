import BasicForm from '@/components/common/BasicForm/BasicFrom'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import React from 'react'
import cn from 'classnames'
import s from './HomeServices.module.scss'

const HomeServices = homeServices => {
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<div className={cn(s.services, 'section')}>
			<div className='container'>
				<div className={s.servicesItems}>
					{homeServices.items.map((item, idx) => (
						<div
							className={cn(s.servicesItem, 'color-white')}
							key={idx}
							style={{ backgroundImage: `url(${imgPath + item.image.data.attributes.url})` }}
						>
							<div
								className={s.servicesItem__content}
								dangerouslySetInnerHTML={{ __html: item.content }}
							></div>
							<div className={cn(s.servicesItem__footer, 'flex')}>
								<PrimaryButton href={item.url}>Подробнее</PrimaryButton>
								<div className={cn(s.servicesItem__subtitle, 's-bold')}>{item.subtitle}</div>
							</div>
						</div>
					))}
					<div className={s.servicesForm}>
						<BasicForm subject={'Оформить заявку'} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeServices
