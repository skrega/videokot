import React, { useState } from 'react'
import s from './FormPopup.module.scss'
import BasicCheckbox from '../BasicCheckbox/BasicCheckbox'
import { useRouter } from 'next/router'
import cn from 'classnames'
import BasicFormButton from '../BasicFormButton/BasicFormButton'
import BasicInput from '../BasicInput/BasicInput'
import Cancel from '@/components/icons/Cancel'
import BasicTextarea from '../BasicTextarea/BasicTextarea'
import { formPopup } from '../FormResolver/FormResolver'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import api from '../../../../api'
import Popup from 'reactjs-popup'
import fixPopup from '../../../../hooks/fixPopup'
import PopupSuccess from '../PopupSuccess/PopupSuccess'

const FormPopup = ({ close, placeholderTextarea, subject }) => {
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)

	const {
		register,
		watch,
		handleSubmit,
		reset,
		setValue,
		getValues,
		setError,
		clearErrors,
		formState: { errors }
	} = useForm({ resolver: yupResolver(formPopup) })

	const router = useRouter()

	const onSubmit = async data => {
		setLoading(true)
		const body = {
			data: {
				name: data.name,
				phone: data.phone,
				email: data.email,
				comment: data.comment,
				agreement: data.agreement
					? 'Согласен с политикой в отношении обработки персональных данных, а также даю согласие на обработку моих персональных данных.'
					: 'Не согласен с политикой в отношении обработки персональных данных, а также не даю согласие на обработку моих персональных данных.',
				url: process.env.NEXT_PUBLIC_SITE_URL + router.asPath,
				subject: subject
			}
		}
		await api({
			url: '/leadforms',
			data: body,
			method: 'POST'
		})
			.then(() => {
				setSuccess(true)
				setLoading(false)
				setShowSuccess(true)
				reset({
					name: '',
					phone: '',
					email: '',
					comment: '',
					agreement: ''
				})
			})
			.catch(e => {
				const errors = e.response.data.errors
				alert('Ошибка отправки')
				setLoading(false)
			})
	}

	return (
		<div className={s.wrapper}>
			<div className={s.cancel} onClick={() => close(false)}>
				<Cancel />
			</div>
			{!success ? ( 
				<div className={s.inner}>
					<h4 className={cn(s.title, 'title-md bolder')}>ОФОРМИТЬ ЗАЯВКУ</h4>
					<form noValidate onSubmit={handleSubmit(onSubmit)}>
						<div className={s.inputWrapper}>
							<BasicInput
								style={'border'}
								label={'Ваше имя'}
								name='name'
								placeholder={'Имя'}
								type={'text'}
								register={register}
								errors={errors}
								required
							/>
						</div>
						<div className={s.inputWrapper}>
							<BasicInput
								style={'border'}
								label={'Ваш телефон'}
								name='phone'
								placeholder={'+ 7 (999) 999 - 99 -99'}
								type={'phone'}
								errors={errors}
								register={register}
								required
								phone
							/>
						</div>
						<div className={s.inputWrapper}>
							<BasicInput
								label={'Ваш e-mail'}
								style={'border'}
								name='email'
								placeholder={'email@email.ru'}
								type={'email'}
								errors={errors}
								register={register}
								required
							/>
						</div>
						<div className={s.inputWrapper}>
							<BasicTextarea
								label={'Опишите Вашу задачу'}
								style={'border'}
								name='comment'
								placeholder={placeholderTextarea ? placeholderTextarea : ''}
								required
							/>
						</div>
						<input type='hidden' name='subject' value={subject} />
						<div className={s.checkboxesWrapper}>
							<BasicCheckbox
								type={'agreement'}
								name={'agreement'}
								value={watch().agreement}
								errors={errors}
								register={register}
							/>
						</div>
						<div className={s.buttonWrapper}>
							<BasicFormButton text={'Отправить заявку'} type={'submit'} loading={loading} />
						</div>
					</form>
				</div>
			) : ( 
				<Popup
					modal={true}
					open={showSuccess}
					onOpen={() => {
						fixPopup(true)
						setShowSuccess(true)
					}}
					onClose={() => {
						setShowSuccess(false)
						fixPopup(false)
					}}
				>
					<PopupSuccess close={setShowSuccess} name={''} />
				</Popup>
			)}
		</div>
	)
}

export default FormPopup
