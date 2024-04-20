import React, { useContext, useState } from 'react'
import A from '@/components/common/A'
import s from './Header.module.scss'
import LogoIcon from '@/components/icons/LogoIcon'
import MenuIcon from './MenuIcon/MenuIcon'
import CatalogMenuIcon from './CatalogMenuIcon/CatalogMenuIcon'
import Phone from '@/components/common/Phone/Phone'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import fixPopup from '../../../../hooks/fixPopup'
import Menu from '../Menu/Menu'
import CatalogMenu from '../Menu/CatalogMenu/CatalogMenu'
import SocialList from '@/components/common/SocialList/SocialList'
import { CartContext } from '@/context/CartContext'

const Header = ({ categories }) => {
	const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext)
	const [showMenu, setShowMenu] = useState(false)
	const [showCatalog, setShowCatalog] = useState(false)

	return (
		<header className={s.header}>
			<div className='container'>
				<div className={s.header__inner}>
					<div className={cn(s.headerColLeft, ' flex')}>
						<div className={s.logo}>
							<A href='/'>
								<LogoIcon />
							</A>
						</div>
						<div className={cn(s.nav, 'flex')}>
							<div onClick={() => setShowMenu(true)}>
								<MenuIcon />
							</div>
							<div onClick={() => setShowCatalog(true)}>
								<CatalogMenuIcon />
							</div>
						</div>
					</div>
					<div className={cn(s.headerColRight, ' flex')}>
						<div className={s.phone}>
							<Phone color={'white'} />
						</div>
						{/* <ul className={cn(s.socials, 'socials flex')}>
							<li className={s.socials__item}>
								<a href='#' target='_blank'>
									<YoutubeIcon />
								</a>
							</li>
							<li className={s.socials__item}>
								<a href='#' target='_blank'>
									<VKIcon />
								</a>
							</li>
							<li className={s.socials__item}>
								<a href='#' target='_blank'>
									<WhatsAppIcon />
								</a>
							</li>
							<li className={s.socials__item}>
								<a href='#' target='_blank'>
									<TelegramIcon />
								</a>
							</li>
						</ul> */}
						<div className={s.socials}>
							<SocialList />
							<A href='/cart'>
							<svg
								width='40'
								height='41'
								viewBox='0 0 40 41'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0 20.5C0 31.5457 8.9543 40.5 20 40.5C31.0457 40.5 40 31.5457 40 20.5C40 9.4543 31.0457 0.5 20 0.5C8.9543 0.5 0 9.4543 0 20.5ZM12.0124 25.9326L9.69122 12.0002H8.24998C7.91847 12.0002 7.60053 11.8685 7.36611 11.6341C7.13169 11.3996 7 11.0817 7 10.7502C7 10.4187 7.13169 10.1007 7.36611 9.86631C7.60053 9.63189 7.91847 9.50019 8.24998 9.50019H10.73C11.0251 9.495 11.3126 9.59465 11.5412 9.78144C11.7824 9.97688 11.9416 10.2556 11.9874 10.5627L12.4337 13.2502H30.7497C30.9478 13.2501 31.143 13.2971 31.3193 13.3873C31.4957 13.4776 31.648 13.6084 31.7639 13.769C31.8797 13.9297 31.9557 14.1156 31.9857 14.3113C32.0156 14.5071 31.9985 14.7072 31.9359 14.8952L28.186 26.1451C28.1031 26.3941 27.9439 26.6107 27.7309 26.7641C27.518 26.9176 27.2622 27.0001 26.9998 27.0001H13.2699C12.9577 27.0055 12.6548 26.8935 12.4212 26.6863C12.1997 26.4916 12.0548 26.2244 12.0124 25.9326ZM12.8499 15.7501L14.3087 24.5001H26.0985L29.016 15.7501H12.8499ZM16.2677 33.7678C16.7365 33.2989 16.9999 32.6631 16.9999 32C16.9999 31.337 16.7365 30.7011 16.2677 30.2323C15.7988 29.7634 15.1629 29.5 14.4999 29.5C13.8369 29.5 13.201 29.7634 12.7322 30.2323C12.2633 30.7011 11.9999 31.337 11.9999 32C11.9999 32.6631 12.2633 33.2989 12.7322 33.7678C13.201 34.2366 13.8369 34.5 14.4999 34.5C15.1629 34.5 15.7988 34.2366 16.2677 33.7678ZM27.5175 33.7678C27.9864 33.2989 28.2497 32.6631 28.2497 32C28.2497 31.337 27.9864 30.7011 27.5175 30.2323C27.0487 29.7634 26.4128 29.5 25.7498 29.5C25.0867 29.5 24.4509 29.7634 23.982 30.2323C23.5132 30.7011 23.2498 31.337 23.2498 32C23.2498 32.6631 23.5132 33.2989 23.982 33.7678C24.4509 34.2366 25.0867 34.5 25.7498 34.5C26.4128 34.5 27.0487 34.2366 27.5175 33.7678Z'
									fill='white'
								/>
							</svg>
							{itemsAmount !== 0 && <span className={s.cart__count}>{itemsAmount}</span>}
						</A>
						</div>

						<div
							className={cn(s.minicart, isOpen && s.open)}
							onClick={() => setIsOpen(!isOpen)}
						></div>
					</div>
				</div>
			</div>
			<Popup
				className={'menu__popup'}
				modal={true}
				open={showMenu}
				onOpen={() => {
					fixPopup(true)
					setShowMenu(true)
				}}
				onClose={() => {
					setShowMenu(false)
					fixPopup(false)
				}}
			>
				<Menu close={setShowMenu} categories={categories} />
			</Popup>
			<Popup
				className={'catalog__popup'}
				modal={true}
				open={showCatalog}
				onOpen={() => {
					fixPopup(true)
					setShowCatalog(true)
				}}
				onClose={() => {
					setShowCatalog(false)
					fixPopup(false)
				}}
			>
				<CatalogMenu close={setShowCatalog} categories={categories} />
			</Popup>
		</header>
	)
}
export default Header
