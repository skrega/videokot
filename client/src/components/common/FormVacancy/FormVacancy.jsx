import React, { useState } from 'react'
import s from '../FormPopup/FormPopup.module.scss'
import BasicCheckbox from '../BasicCheckbox/BasicCheckbox'
import { useRouter } from 'next/router'
import cn from 'classnames'
import BasicFormButton from '../BasicFormButton/BasicFormButton'
import BasicInput from '../BasicInput/BasicInput'
import Cancel from '@/components/icons/Cancel'
import BasicTextarea from '../BasicTextarea/BasicTextarea'
import { formVacancy } from '../FormResolver/FormResolver'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import BasicFileInput from '../BasicFileInput/BasicFileInput'
import api from '../../../../api'
import fixPopup from '../../../../hooks/fixPopup'
import Popup from 'reactjs-popup'
import PopupSuccess from '../PopupSuccess/PopupSuccess'

const FormVacancy = ({ close, vacancyName }) => {
	const [loading, setLoading] = useState(false)
	const [name, setName] = useState('')
	const [success, setSuccess] = useState(false)
	const [showSuccess, setShowSuccess] = useState(false)
	const [file, setFile] = useState()
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
	} = useForm({ resolver: yupResolver(formVacancy) })
	const router = useRouter()

	// const onSubmit = async data => {
	// 	setLoading(true)
	// 	const body = {
	// 		data: {
	// 			name: data.name,
	// 			phone: data.phone,
	// 			email: data.email,
	// 			comment: data.comment,
	// 			agreement: data.agreement
	// 				? 'Согласен с политикой в отношении обработки персональных данных, а также даю согласие на обработку моих персональных данных.'
	// 				: 'Не согласен с политикой в отношении обработки персональных данных, а также не даю согласие на обработку моих персональных данных.',
	// 			url: process.env.NEXT_PUBLIC_SITE_URL + router.asPath,
	// 			file: data.file[0]
	// 		}
	// 	}
	// 	await api({
	// 		url: '/resumes',
	// 		data: body,
	// 		method: 'POST'
	// 	})
	// 	// await fetch(`http://185.84.163.241/uploads`, {
	// 	// 	method: 'POST',
	// 	// 	body: body
	// 	// })
	// 		.then(() => {
	// 			setSuccess(true)
	// 			setLoading(false)
	// 			reset({
	// 				name: '',
	// 				phone: '',
	// 				email: '',
	// 				comment: '',
	// 				agreement: null,
	// 				file: null
	// 			})
	// 		})
	// 		.catch(e => {
	// 			const errors = e.response.data.errors
	// 			alert('Ошибка отправки')
	// 			setLoading(false)
	// 		})
	// }

	const onSubmit = async data => {
		setLoading(true)
		const formData = new FormData()
		formData.append('files.file', data.file[0], data.file[0].name) // Assuming the file input name is 'file'
		formData.append(
			'data',
			JSON.stringify({
				subject: vacancyName,
				name: data.name,
				phone: data.phone,
				email: data.email,
				comment: data.comment,
				agreement: data.agreement
					? 'Согласен с политикой в отношении обработки персональных данных, а также даю согласие на обработку моих персональных данных.'
					: 'Не согласен с политикой в отношении обработки персональных данных, а также не даю согласие на обработку моих персональных данных.',
				url: process.env.NEXT_PUBLIC_SITE_URL + router.asPath
			})
		)
		try {
			// Send data to Strapi
			await api({
				url: '/resumes?populate=*',
				data: formData,
				method: 'POST'
			})

			setSuccess(true)
			setLoading(false)
			setShowSuccess(true)
			setName(data.name)
			reset({
				name: '',
				phone: '',
				email: '',
				comment: '',
				agreement: '',
				file: null // Reset file input value
			})
		} catch (e) {
			const errors = e.response.data.errors
			alert('Ошибка отправки')
			setLoading(false)
		}
	}
	return (
		<div className={s.wrapper}>
			<div className={s.cancel} onClick={() => close(false)}>
				<Cancel />
			</div>

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
							label={'Комментарий'}
							style={'border'}
							name='comment'
							placeholder={''}
							required
						/>
					</div>
					<div className={s.inputWrapper}>
						<BasicFileInput
							label={'Резюме'}
							style={'border'}
							name='file'
							placeholder={''}
							errors={errors}
							register={register}
							required
						/>
					</div>
					<div className={s.checkboxesWrapper}>
						<BasicCheckbox name={'agreement'} errors={errors} register={register} />
					</div>
					<div className={s.buttonWrapper}>
						<BasicFormButton text={'Отправить заявку'} type={'submit'} loading={loading} />
					</div>
				</form>
			</div>
			{success && (
				<Popup
					className={'catalog__popup'}
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
					<PopupSuccess close={setShowSuccess} name={name} />
				</Popup>
			)}
		</div>
	)
}

export default FormVacancy
