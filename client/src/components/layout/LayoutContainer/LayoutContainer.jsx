import React from 'react'
import NextHead from 'next/head'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

const LayoutContainer = ({ description, title, children, categories }) => {
	return (
		<>
			<NextHead>
				<meta charSet='UTF-8' />
				<title>
					{title
						? title + ' | VideoКОТ Видеонаблюдение любой сложности'
						: 'VideoКОТ Видеонаблюдение любой сложности'}
				</title>
				<meta
					name={'description'}
					content={
						description
							? description
							: 'VideoКОТ Видеонаблюдение любой сложности'
					}
				/>
				<meta
					property='og:title'
					content={
						title
							? title + ' | VideoКОТ Видеонаблюдение любой сложности'
							: 'VideoКОТ Видеонаблюдение любой сложности'
					}
				/>
				<meta
					property='og:description'
					content={
						description
							? description
							: 'VideoКОТ Видеонаблюдение любой сложности'
					}
				/>
				<meta
					property='twitter:title'
					content={
						title
							? title + ' | VideoКОТ Видеонаблюдение любой сложности'
							: 'VideoКОТ Видеонаблюдение любой сложности'
					}
				/>
				<meta
					property='twitter:description'
					content={
						description
							? description
							: 'VideoКОТ Видеонаблюдение любой сложности'
					}
				/>
				<meta property='og:image' content='http://185.84.163.241/uploads/fav_acf6464b00.png' />
				<meta
					property='og:image:secure_url'
					content='http://185.84.163.241/uploads/fav_acf6464b00.png'
				/>
				<meta name='twitter:image' content='http://185.84.163.241/uploads/fav_acf6464b00.png' />
				<meta
					name='viewport'
					content='width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
				/>
				<link rel='icon' href='src/images/favicon.png' />
			</NextHead>

			<Header categories={categories}/>
			<div className='wrapper'>
				<div className={'main'}>{children}</div>
				<Footer />
			</div>
		</>
	)
}

export default LayoutContainer
