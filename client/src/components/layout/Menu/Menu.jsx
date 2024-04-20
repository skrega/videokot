import React, { useState } from 'react'
import s from './Menu.module.scss'
import A from '@/components/common/A'
import SettingsIcon from '@/components/icons/SettingsIocn'
import UsersIcon from '@/components/icons/UsersIcon'
import BlogIcon from '@/components/icons/BlogIcon'
import cn from 'classnames'
import Cancel from '@/components/icons/Cancel'
import useWindowSize from '../../../../hooks/useWindowSize'
import LogoIconBlack from '@/components/icons/LogoIconBlack'
import Phone from '@/components/common/Phone/Phone'
import SocialList from '@/components/common/SocialList/SocialList'

const Menu = ({ close, categories }) => {
	const { width } = useWindowSize()
	const [open, setOpen] = useState(false)
	const handleClick = e => {
		e.target.classList.toggle(s.opened)
	}
	return (
		<nav className={s.menu__wrapper}>
			{width < 767 && (
				<A href='/'>
					<LogoIconBlack />
				</A>
			)}
			<div className={cn('close', s.cancel)} onClick={() => close(false)}>
				<Cancel />
			</div>
			<div className={s.menu__inner}>
				<div className={s.menu__item}>
					<div
						className={cn('bolder text', s.menu__title, s.item, open && s.opened)}
						onClick={handleClick}
					>
						<SettingsIcon />
						Сервис и поддержка
					</div>
					<ul className={s.menu__list}>
						<li onClick={() => close(false)}>
							<A href='/installation'>Установка и монтаж</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/guarantee'>Гарантия и техническое обслуживание</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/instructions'>Инструкции</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/faq'>Часто задаваемые вопросы</A>
						</li>
					</ul>
				</div>
				<div className={s.menu__item}>
					<div
						className={cn('bolder text', s.menu__title, s.item, open && s.opened)}
						onClick={handleClick}
					>
						<UsersIcon /> О компании
					</div>
					<ul className={s.menu__list}>
						<li onClick={() => close(false)}>
							<A href='/about'>О компании</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/payment'>Оплата</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/privacy'>Политика конфиденциальности</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/contacts'>Контакты</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/clients'>Наши клиенты</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/vacancies'>Вакансии</A>
						</li>
					</ul>
				</div>
				<div className={s.menu__item}>
					<div className={cn('bolder text', s.menu__title, open && s.opened)} onClick={handleClick}>
						<BlogIcon />
						Блог
					</div>
					<ul className={s.menu__list}>
						<li onClick={() => close(false)}>
							<A href='/blog'>Блог</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/news'>Новости</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/videomaterials'>Видеоматериалы</A>
						</li>
						<li onClick={() => close(false)}>
							<A href='/instructions'>Инструкции</A>
						</li>
					</ul>
				</div>
			</div>
			{width > 767 && (
				<div className={s.menu__tags}>
					{categories.map((item, idx) => (
						<A
							className={cn('medium color-white', s.menu__tag)}
							href={'/catalog/' + item.attributes.slug}
						>
							{item.attributes.title}
						</A>
					))}

					<A className={cn('medium color-white', s.menu__tag)} href='/vols'>
						Монтаж и обслуживание ВОЛС и СКС
					</A>
				</div>
			)}
			{width < 767 && (
				<div className={s.menu__footer}>
					<Phone />
					<SocialList />
				</div>
			)}
		</nav>
	)
}

export default Menu
