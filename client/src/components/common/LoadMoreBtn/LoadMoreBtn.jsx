import React from 'react'
import s from './LoadMoreBtn.module.scss'

const LoadMoreBtn = () => {
	return (
		<button className={s.btn}>
			Показать еще
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='16' cy='16' r='16' fill='#E71F2A' />
				<path
					d='M14.5019 21.0002C14.3703 21.0009 14.2398 20.9757 14.118 20.9259C13.9961 20.8762 13.8853 20.8029 13.7919 20.7102C13.6982 20.6172 13.6238 20.5066 13.573 20.3848C13.5222 20.2629 13.4961 20.1322 13.4961 20.0002C13.4961 19.8682 13.5222 19.7375 13.573 19.6156C13.6238 19.4937 13.6982 19.3831 13.7919 19.2902L17.1019 16.0002L13.9219 12.6902C13.7356 12.5028 13.6311 12.2494 13.6311 11.9852C13.6311 11.721 13.7356 11.4675 13.9219 11.2802C14.0149 11.1864 14.1255 11.1121 14.2473 11.0613C14.3692 11.0105 14.4999 10.9844 14.6319 10.9844C14.7639 10.9844 14.8946 11.0105 15.0165 11.0613C15.1383 11.1121 15.2489 11.1864 15.3419 11.2802L19.2019 15.2802C19.3851 15.4671 19.4877 15.7184 19.4877 15.9802C19.4877 16.2419 19.3851 16.4932 19.2019 16.6802L15.2019 20.6802C15.1121 20.7771 15.0041 20.8553 14.8839 20.9102C14.7638 20.9651 14.6339 20.9957 14.5019 21.0002Z'
					fill='white'
				/>
			</svg>
		</button>
	)
}

export default LoadMoreBtn
