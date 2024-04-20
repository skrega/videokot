import React from 'react'
import Link from 'next/link'

const A = ({ children, href = '/', locate, className }) => {
	return (
		<Link className={className} href={href} locate={locate}>
			{children}
		</Link>
	)
}
export default A
