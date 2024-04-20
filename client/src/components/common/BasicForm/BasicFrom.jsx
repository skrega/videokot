import React, { useState } from 'react'
import s from './BasicForm.module.scss'
import BasicInput from '../BasicInput/BasicInput'
import BasicCheckbox from '../BasicCheckbox/BasicCheckbox'
import { useRouter } from 'next/router'
import cn from 'classnames'
import BasicFormButton from '../BasicFormButton/BasicFormButton'
import { useForm } from 'react-hook-form'
import { basicForm } from '../FormResolver/FormResolver'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../../../api'
import Popup from 'reactjs-popup'
import PopupSuccess from '../PopupSuccess/PopupSuccess'
import fixPopup from '../../../../hooks/fixPopup'

const BasicForm = ({ props, subject }) => {
	const [success, setSuccess] = useState(false)
	const [loading, setLoading] = useState(false)
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
	} = useForm({ resolver: yupResolver(basicForm) })

	const router = useRouter()

	const onSubmit = async data => {
		setLoading(true)
		const body = {
			data: {
				name: data.name,
				phone: data.phone,
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
					agreement: ''
				})
			})
			.catch(e => {
				const errors = e.response.data.errors
				alert('Ошибка отправки')
				setLoading(false)
			})
	}
	// const onSubmit = (data) => {
	// 	console.log({ data });
	// 	reset();
	//   };
	// const { inline } = props
	return (
		<div className={s.wrapper}>
			{/* {!success ? ( */}
			<div className={s.inner}>
				<h4 className={cn(s.title, 'title-md bolder')}>ОФОРМИТЬ ЗАЯВКУ</h4>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<div className={s.inputWrapper}>
						<BasicInput
							name='name'
							placeholder={'Ваше имя'}
							type={'text'}
							register={register}
							errors={errors}
							value={watch().name}
							required
						/>
					</div>
					<div className={s.inputWrapper}>
						<BasicInput
							name='phone'
							placeholder={'Ваш телефон'}
							type={'phone'}
							errors={errors}
							value={watch().phone}
							register={register}
							required
							phone
						/>
					</div>
					<div className={s.checkboxesWrapper}>
						<BasicCheckbox
							type={'agreement'}
							name={'agreement'}
							value={watch().agreement}
							errors={errors}
							register={register}
						/>
					</div>
					<input type='hidden' name='subject' value={subject} />
					<div className={s.buttonWrapper}>
						<BasicFormButton text={'Отправить заявку'} type={'submit'} loading={loading} />
					</div>
				</form>
			</div>
			{/* ) : ( */}
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
					<PopupSuccess close={setShowSuccess} name={''} />
				</Popup>
			)}
			{/* )} */}
		</div>
	)
}

export default BasicForm
