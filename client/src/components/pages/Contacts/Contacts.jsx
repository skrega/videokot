import React from 'react'
import s from './Contacts.module.scss'
import cn from 'classnames'
import Phone from '@/components/common/Phone/Phone'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import SocialList from '@/components/common/SocialList/SocialList'

const Contacts = ({ contact, categories }) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={contact.attributes.meta_title}
				description={contact.attributes.meta_description}>
				<div className={s.wrapper}>
					<div className='container'>
						<h1 className={cn('title-l', s.title)}>{contact.attributes.title}</h1>
					</div>
					<div className={s.inner}>
						<div className='container'>
							<div className={cn('br-15 color-white', s.box)}>
								<h5 className={cn(s.box__title, 'title-md bolder')}>Адрес: </h5>
								<div
									className={cn(s.box__text, 'text medium')}
									dangerouslySetInnerHTML={{ __html: contact.attributes.address }}
								></div>
								<Phone />
								<a
									href={'mailto:' + contact.attributes.email}
									className={cn('bolder', s.box__link)}
								>
									{contact.attributes.email}
								</a>
								<a href={contact.attributes.text} className={cn('bolder', s.box__link)}>
									{contact.attributes.text}
								</a>
								<div className={s.box__socials}>
									<SocialList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Contacts
