import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import cn from 'classnames'
import React from 'react'
import s from './Privacy.module.scss'

const Privacy = ({ privacy,categories }) => {
	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories} title={privacy.attributes.mainInfo.meta_title}
				description={privacy.attributes.mainInfo.meta_description}>
				<div className='section'>
					<div className='container'>
						<div className={s.inner}>
							<h1 className={cn('title-l mb-7', s.title)}>{privacy.attributes.mainInfo.title}</h1>
							<div
								className={cn('text', s.content)}
								dangerouslySetInnerHTML={{ __html: privacy.attributes.content }}
							></div>
						</div>
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Privacy
