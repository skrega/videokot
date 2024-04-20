import cn from 'classnames'
import React from 'react'
import s from './CatalogMenu.module.scss'
import A from '@/components/common/A'
import Image from 'next/image'
import icon from '../../../../images/icons/vols_icon.svg'
import Cancel from '@/components/icons/Cancel'
import LogoIconBlack from '@/components/icons/LogoIconBlack'
import useWindowSize from '../../../../../hooks/useWindowSize'
import Phone from '@/components/common/Phone/Phone'
import SocialList from '@/components/common/SocialList/SocialList'

const CatalogMenu = ({ close, categories }) => {
	const { width } = useWindowSize()
	const imgPath = process.env.NEXT_PUBLIC_API
	return (
		<div className={s.menu__wrapper}>
			{width < 767 && (
				<A href='/'>
					<LogoIconBlack />
				</A>
			)}
			<div className={cn('close', s.cancel)} onClick={() => close(false)}>
				<Cancel />
			</div>
			<nav className={s.menu__inner}>
				<ul className={s.menu__items}>
					{categories.map((item, idx) => (
						<li onClick={() => close(false)}>
							<A href={'/catalog/' + item.attributes.slug}>
								<Image
									src={imgPath + item.attributes.img.data.attributes.url}
									width={40}
									height={40}
									alt={item.attributes.title}
								/>
								{item.attributes.title}
							</A>
						</li>
					))}
					<li onClick={() => close(false)}>
						<A href='/vols'>
							<Image src={icon} alt={'ВОЛС и СКС'} />
							Монтаж и обслуживание <br /> ВОЛС и СКС
						</A>
					</li>
				</ul>
				{width < 767 && (
				<div className={s.menu__footer}>
					<Phone />
					<SocialList />
				</div>
			)}
			</nav>
		</div>
	)
}

export default CatalogMenu
