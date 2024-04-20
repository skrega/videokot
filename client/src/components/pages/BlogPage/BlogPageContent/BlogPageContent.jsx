import React from 'react'
import s from './BlogPageContent.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import BlogMediaComponent from './BlogMediaComponent/BlogMediaComponent'

const BlogPageContent = ({ blogItem }) => {
	const imgPath = process.env.NEXT_PUBLIC_API

	return (
		<section className={cn('section', s.wrapper)} itemscope itemtype='http://schema.org/Article'>
			<div className={s.inner}>
				<div className={s.head}>
					<h1 className={cn('title-l mb-3', s.title)} itemprop='headline'>
						{blogItem.titleH1}
					</h1>
					{blogItem.topSubtitle && 
					<p className={cn('title-md', s.head__text)} >
						{blogItem.topSubtitle}
					</p>
					}
					{blogItem.topText && (
						<div
							className={cn('text', s.head__text, blogItem.twoColumns ? s.text__column : '')}
							dangerouslySetInnerHTML={{ __html: blogItem.topText }}
							itemprop='alternativeHeadline'
						></div>
					)}
					<div className={s.media}>
						<BlogMediaComponent blogItem={blogItem} imgPath={imgPath} />
					</div>
				</div>
				{blogItem.blogContent && blogItem.blogContent.map((item, idx) => (
					item.__component === 'blog-content.blog-content' ? (
					<div
					className={cn(
						'text list',
						s.content, s.middle__content,
						item.isTwoColumns ? s.text__column : ''
					)}
					dangerouslySetInnerHTML={{ __html: item.text }}
				></div>
				):(
					<div className={s.dedicated__content}>
						<div className={s.dedicated__col}>
							<h3 className={cn('title', s.dedicated__title)}>{item.title}</h3>
							<div
								className={cn('text', s.dedicated__text)}
								dangerouslySetInnerHTML={{ __html: item.text }}
							></div>
						</div>
						<div className={s.dedicated__col}>
							<Image
								className={cn('br-15', s.dedicated__img)}
								src={imgPath + item.img.data.attributes.url}
								width={item.img.data.attributes.width}
								height={item.img.data.attributes.height}
								alt={item.title}
							/>
						</div>
					</div>
				)
				))}
			</div>
			{blogItem.bottomPrimaryText && (
				<h4 className={cn('title-md color-primary s-bold', s.bottom__text)}>
					{blogItem.bottomPrimaryText}
				</h4>
			)}
			{blogItem.author && (
				<div className={cn('text medium', s.author)} itemprop='author'>
					{blogItem.author}
				</div>
			)}
		</section>
	)
}

export default BlogPageContent
