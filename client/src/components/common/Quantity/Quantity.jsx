import { useContext, useState } from 'react'
import s from './Quantity.module.scss'
import cn from 'classnames'
import { CartContext } from '@/context/CartContext'

const Quantity = ({ item }) => {
	const { handleInput } = useContext(CartContext)
	const [amount, setAmount] = useState(item.amount)
	const handleQuantityChange = change => {
		const updatedAmount = amount + change
		if (updatedAmount >= 1) {
			setAmount(updatedAmount);
			handleInput(updatedAmount, item.id);
		  }
	}

	// console.log(item)
	return (
		<div className={s.item}>
			<input
				className={s.input}
				type='number'
				value={item.amount}
				onChange={e => handleInput(e, item.id)}
			/>
			<div className={s.buttons}>
				<button className={cn(s.btn, s.plus)} onClick={() => handleQuantityChange(1)}>
					<svg
						width='15'
						height='14'
						viewBox='0 0 15 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M2.96587 7H12.9659M7.96587 12L7.96587 2'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
				<button className={cn(s.btn, s.minus)} onClick={() => handleQuantityChange(-1)}>
					<svg
						width='15'
						height='14'
						viewBox='0 0 15 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M2.96587 7H12.9659'
							stroke='black'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Quantity
