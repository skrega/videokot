import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import cn from 'classnames'
import React from 'react'
import s from './Faq.module.scss'
import FaqItem from './FaqItem/FaqItem'
const Faq = ({ faq, categories }) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={faq.attributes.meta_title} description={faq.attributes.meta_description}>
				<div className={cn('section', s.wrapper)}>
					<div className='container'>
						<h1 className={cn('title-l mb-7', s.title)}>{faq.attributes.title}</h1>
						{faq.attributes.faqItems.map((item, idx) => (
							<FaqItem item={item} key={idx} />
						))}
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Faq
