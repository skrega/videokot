import React, { useEffect, useState } from 'react'
import s from './PlayBtn.module.scss'
const PlayBtn = ({ videoRef }) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const playVideo = () => {
		videoRef.current.play()
		setIsPlaying(true)
	}

	useEffect(() => {
		if (isPlaying) {
			videoRef.current.setAttribute('controls', true)
			videoRef.current.addEventListener('pause', handlePause)
		} else {
			videoRef.current.removeEventListener('pause', handlePause)
			videoRef.current.removeAttribute('controls')
		}
	}, [isPlaying])

	const handlePause = () => {
		setIsPlaying(false)
	}

	return (
		<>
			{!isPlaying && (
				<button className={s.button} onClick={playVideo}>
					<svg
						width='22'
						height='25'
						viewBox='0 0 22 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.25 10.8029C21.5326 11.5771 21.54 13.4347 20.2635 14.2191L4.10718 24.1468C2.77762 24.9638 1.0663 24.0112 1.06012 22.4507L0.981993 2.72364C0.975813 1.16315 2.67953 0.197052 4.01552 1.00347L20.25 10.8029Z'
							fill='#E71F2A'
						/>
					</svg>
				</button>
			)}
		</>
	)
}
export default PlayBtn
