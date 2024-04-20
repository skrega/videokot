import React, { useState, createRef, useRef, useEffect } from 'react'
import s from './ClientItem.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import { Transition } from 'react-transition-group'
import useWindowSize from '../../../../../hooks/useWindowSize'

const ClientItem = ({ item }) => {
	// const refComponent = useRef(null);
	// console.log(refComponent)
	// const duration = 300;
	// const defaultStyle = {
	//   transition: `height ${duration}ms ease-in-out`,
	//   height: 'auto',
	// //   visibility: 'hidden'
	// };

	// const transitionStyles = {
	//   entering: { height: refComponent.current?.clientHeight },
	//   entered: { height: refComponent.current?.clientHeight },
	//   exiting: { height: 0 },
	//   exited: { height: 0 }
	// };
	const { width } = useWindowSize()
	const imgPath = process.env.NEXT_PUBLIC_API
	const [open, setOpen] = useState(false)

	return (
		<>
			<div className={cn('br-15', s.item)}>
				<div
					className={cn('flex', s.item__head, open && s.opened)}
					onClick={() => setOpen(prev => !prev)}
				>
					<h3 className={cn('title-md bolder color-primary', s.item__title)}>{item.title}</h3>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clip-path='url(#clip0_419_2889)'>
							<rect y='11' width='24' height='2' rx='1' fill='#E71F2A'></rect>
							<rect x='11' width='2' height='24' rx='1' fill='#E71F2A'></rect>
						</g>
						<defs>
							<clipPath id='clip0_419_2889'>
								<rect width='24' height='24' fill='white'></rect>
							</clipPath>
						</defs>
					</svg>
				</div>
				<div className={s.item__spoller}>
					<div className={cn('text', s.item__content)}>
						<div className={s.item__col}>
							<div className={s.item__text} dangerouslySetInnerHTML={{ __html: item.text }}></div>
							{width < 999 && (
								<div className={s.item__images}>
									{item.images.data.slice(0, 4).map((img, idx) => (
										<Image
											className={cn('br-15', s.item__topImg)}
											key={idx}
											src={imgPath + img.attributes.url}
											width={img.attributes.width}
											height={img.attributes.height}
											alt={'Изображение ' + idx}
										/>
									))}
								</div>
							)}
							<div
								className={s.item__text}
								dangerouslySetInnerHTML={{ __html: item.textContent }}
							></div>
							<div className={cn('bolder', s.item__bottomText)}>{item.bottomText}</div>
						</div>
						{width > 999 && (
							<div className={s.item__images}>
								{item.images.data.slice(0, 3).map((img, idx) => (
									<Image
										className={cn('br-15', s.item__topImg)}
										key={idx}
										src={imgPath + img.attributes.url}
										width={img.attributes.width}
										height={img.attributes.height}
										alt={'Изображение ' + idx}
									/>
								))}
							</div>
						)}
					</div>
					{width > 999 && (
						<div className={s.item__bottomImages}>
							{item.images.data.slice(-2).map((img, idx) => (
								<Image
									className={cn('br-15')}
									key={idx}
									src={imgPath + img.attributes.url}
									width={img.attributes.width}
									height={img.attributes.height}
									alt={'Изображение ' + idx}
								/>
							))}
						</div>
					)}
					{width < 999 && (
						<div className={s.item__bottomImages}>
							{item.images.data.slice(-1).map((img, idx) => (
								<Image
									className={cn('br-15')}
									key={idx}
									src={imgPath + img.attributes.url}
									width={img.attributes.width}
									height={img.attributes.height}
									alt={'Изображение ' + idx}
								/>
							))}
						</div>
					)}
				</div>

				{/* <Transition in={open} timeout={duration}>
					{state => (
						<div
							style={{
								...defaultStyle,
								...transitionStyles[state]
							}}
							ref={refComponent}
						></div>
					)}
				</Transition> */}
			</div>
		</>
	)
}

export default ClientItem
