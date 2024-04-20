import React from 'react'
import icon from '../../images/blogIcon.svg'
import Image from 'next/image'
const BlogIcon = () => {
	return (
		<div>
			<Image src={icon} alt={'Блог'} />
		</div>
	)
}

export default BlogIcon
