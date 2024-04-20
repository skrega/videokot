import React from 'react'
import s from './Footer.module.scss'
import LogoWhiteIcon from '@/components/icons/LogoWhiteIcon'
import Phone from '@/components/common/Phone/Phone'
import SocialList from '@/components/common/SocialList/SocialList'
import A from '@/components/common/A'
import cn from 'classnames'
import useWindowSize from '../../../../hooks/useWindowSize'

const Footer = () => {
	const { width } = useWindowSize()
	return (
		<footer className={cn('color-white', s.footer)}>
			<nav className={cn('flex', s.footer__inner)}>
				<a className={s.footer__logo} href='/'>
					<LogoWhiteIcon />
				</a>
				{width < 787 && (
					<div className={cn('flex', s.footer__col)}>
						<Phone />
						<div className={s.footer__social}>
							<SocialList />
						</div>
					</div>
				)}
				<div className={cn('flex', s.footer__nav)}>
					<div className={s.footerMenu}>
						<div className={cn('s-bold', s.footerMenu__title)}>Каталог</div>
						<ul className={s.footerMenu__items}>
							<li className={s.footerMenu__item}>
								<A href='/catalog/sets/'>Комплекты</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/catalog/videocameras/'>Камеры</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/catalog/dvrs/'>Видеорегистраторы</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/catalog/intercoms/'>Домофоны</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/catalog/cabinets-schmp/'>Шкафы (ЩМП)</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/catalog/consumables-accessories/'>Расходники и акскссуары</A>
							</li>
						</ul>
					</div>
					<div className={s.footerMenu}>
						<div className={cn('s-bold', s.footerMenu__title)}>Сервис и поддержка</div>
						<ul className={s.footerMenu__items}>
							<li className={s.footerMenu__item}>
								<A href='/installation'>Установка и монтаж</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/guarantee'>Гарантия и сервисное обслуживание</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/services-instructions'>Инструкции</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/faq'>Часто задаваемые вопросы</A>
							</li>
						</ul>
					</div>
					<div className={s.footerMenu}>
						<div className={cn('s-bold', s.footerMenu__title)}>О компании</div>
						<ul className={s.footerMenu__items}>
							<li className={s.footerMenu__item}>
								<A href='/about'>О компании</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/payment'>Оплата</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/contacts'>Контакты</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/clients'>Наши клиенты</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/vacancies'>Вакансии</A>
							</li>
						</ul>
					</div>
					<div className={s.footerMenu}>
						<div className={cn('s-bold', s.footerMenu__title)}>Блог</div>
						<ul className={s.footerMenu__items}>
							<li className={s.footerMenu__item}>
								<A href='/blog'>Статьи</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/news'>Новости</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/videomaterials'>Видеоматериалы</A>
							</li>
							<li className={s.footerMenu__item}>
								<A href='/instructions'>Инструкции</A>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className={cn('flex', s.footer__bottom)}>
				<div className={s.footer__text}>
					<p>©2023 VideoКОТ. Все права защищены</p>
					<A href='/privacy'>Политика конфиденциальности</A>
				</div>
				{width > 787 && (
					<div className={cn('flex', s.footer__col)}>
						<Phone />
						<div className={s.footer__social}>
							<SocialList />
						</div>
					</div>
				)}
			</div>
		</footer>
	)
}
export default Footer
