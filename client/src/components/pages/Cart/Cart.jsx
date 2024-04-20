import React, { useContext } from 'react'
import s from './Cart.module.scss'
import cn from 'classnames'
import PrimaryButton from '@/components/common/PrimaryButton/PrimaryButton'
import LayoutContainer from '@/components/layout/LayoutContainer/LayoutContainer'
import CartItem from './CartItem/CartItem'
import { CartContext } from '@/context/CartContext'
import formatPrice from '../../../../hooks/formatPrice'
import { useSelector } from 'react-redux';

const Cart = ({ cart, categories }) => {
	// const cartItems = useSelector((state) => state.cart.items);
	const {total} = useContext(CartContext)

	return (
		<div className='header-bg'>
			<LayoutContainer categories={categories}>
				<div className={cn('section', s.wrapper)}>
					<div className='container'>
						<div className={cn('flex', s.top__inner)}>
							<h1 className={cn('title-l', s.title)}>Корзина</h1>
							{cart.cart.length > 0 && <PrimaryButton href='#'>Перейти к оформлению</PrimaryButton>}
						</div>
						<div className={s.inner}>
							{cart.cart.length > 0 ? (
								<>
									<div className={s.items}>
										<div className={cn(s.items__head, 'text')}>
											<div className={s.item__col}></div>
											<div className={s.item__col}></div>
											<div className={s.item__col}>Товар</div>
											<div className={s.item__col}>Цена</div>
											<div className={s.item__col}>Количество</div>
											<div className={s.item__col}>Сумма</div>
										</div>
										{cart.cart.map((item, idx) => {
											return <CartItem item={item} key={idx} />
										})}
									</div>
									{cart.cart.length >= 1 && (
										<div className={s.total}>
											<p className={s.total__text}>Итого</p>
											<p className={cn('title-md bolder', s.total_sum)}>{formatPrice(total)} ₽</p>
										</div>
									)}
								</>
							) : (
								<h2 className='title text-center'>Ваша корзина пуста</h2>
							)}
						</div>
						<div className='center-block'>
							{cart.cart.length > 0 ? (
								<PrimaryButton href='#'>Перейти к оформлению</PrimaryButton>
							) : (
								<PrimaryButton href='/catalog/videocameras'>В каталог</PrimaryButton>
							)}
						</div>
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Cart
