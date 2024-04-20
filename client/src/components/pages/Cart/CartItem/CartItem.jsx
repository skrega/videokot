import React, { useContext } from 'react'
import s from './CartItem.module.scss'
import Image from 'next/image'
import TrashIcon from '@/components/icons/TrashIcon'
import formatPrice from '../../../../../hooks/formatPrice'
import { CartContext } from '@/context/CartContext'
import Quantity from '@/components/common/Quantity/Quantity'
import cn from 'classnames'
import A from '@/components/common/A'

const CartItem = ({ item }) => {
	const imgPath = process.env.NEXT_PUBLIC_API

	const { removeFromCart } = useContext(CartContext)


	return (
		<div className={s.item}>
			<div className={s.item__row}>
				{/* <button className={s.delete} onClick={() => removeFromCart(item.id)}>
					<TrashIcon />
				</button> */}
				<button className={s.delete} onClick={() => removeFromCart(item.id)}>
					<TrashIcon />
				</button>
				<A href={'product/' + item.attributes.slug}>
					<Image
						className={s.item__img}
						src={imgPath + item.attributes.images.data.slice(0)[0].attributes.url}
						width={item.attributes.images.data.slice(0)[0].attributes.width}
						height={item.attributes.images.data.slice(0)[0].attributes.height}
						alt={item.attributes.name}
					/>
				</A>
				<div className={cn('text', s.item__name, s.item__col)}>
					<A href={'product/' + item.attributes.slug}>{item.attributes.name}</A>
				</div>
				<div className={cn('title-md bolder', s.item__price, s.item__col)}>
					{formatPrice(item.attributes.price)} ₽
				</div>

				<div className={cn(s.item__count, s.item__col)}>
					<Quantity item={item} />
				</div>
				<div className={cn('title-md bolder', s.item__price, s.item__total, s.item__col)}>
					{formatPrice(item.attributes.price * item.amount)} ₽
				</div>
			</div>
		</div>
	)
}

export default CartItem
