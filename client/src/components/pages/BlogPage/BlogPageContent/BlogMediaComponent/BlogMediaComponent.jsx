import React, { useRef } from 'react'
import Image from 'next/image'
import s from './BlogMediaComponent.module.scss'
import PlayBtn from '@/components/common/PlayBtn/PlayBtn'
const BlogMediaComponent = ({ blogItem, imgPath }) => {
	const videoRef = useRef(null)

	if (blogItem.media.data != null) {
		if (blogItem.media.data.attributes.mime.split('/')[0] !== 'video') {
			return (
				<Image
					className='br-15'
					src={imgPath + blogItem.media.data.attributes.url}
					width={blogItem.media.data.attributes.width}
					height={blogItem.media.data.attributes.height}
					alt={blogItem.titleH1}
				/>
			)
		} else {
			return (
				<div className={s.video}>
					<video className={s.video__player} width='320' height='240' controls ref={videoRef}>
						<source
							src={imgPath + blogItem.media.data.attributes.url}
							type={blogItem.media.data.attributes.mime}
						/>
						Your browser does not support the video tag.
					</video>
					<PlayBtn videoRef={videoRef} />
				</div>
			)
		}
	} else {
		return (
			<Image
				className='br-15'
				src={imgPath + blogItem.thumbnail.data.attributes.url}
				width={blogItem.thumbnail.data.attributes.width}
				height={blogItem.thumbnail.data.attributes.height}
				alt={blogItem.titleH1}
			/>
		)
	}
}

export default BlogMediaComponent
