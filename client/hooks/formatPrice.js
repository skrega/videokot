// const formatPrice = (price, currency) => {
// 	const formatter = new Intl.NumberFormat('ru-RU', {
// 		style: 'currency',
// 		currency: currency,
// 		minimumFractionDigits: 0,
// 		maximumFractionDigits: 2
// 	})

// 	return formatter.format(price).slice(0, -2)
// }

const formatPrice = price => {
	return new Intl.NumberFormat('ru-RU').format(price)
}

export default formatPrice