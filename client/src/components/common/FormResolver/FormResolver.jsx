import * as yup from 'yup'

export function escapeRegExp(stringToGoIntoTheRegex) {
	return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

export function replace(str, find, replace = '$&') {
	if (!find || !str) return str
	const regStr = escapeRegExp(find)
	const regex = new RegExp(regStr, 'gi')
	return str.replace(regex, replace)
}

export const phoneMask = '+7 (999) 999-99-99'
export const phoneRegExp = new RegExp(escapeRegExp(phoneMask).replace(/9/g, '[0-9]'), 'gi')

export const checked = true
export const phoneTest = phoneRegExp.test

function equalTo(ref, msg) {
	return this.test({
		name: 'equalTo',
		exclusive: false,
		message: msg || '${path} must be the same as ${reference}',
		params: {
			reference: ref.path
		},
		test: function (value) {
			return value === this.resolve(ref)
		}
	})
}

yup.addMethod(yup.string, 'equalTo', equalTo)


const schemes = {
	name: yup.string().required('Введите имя'),
	email: yup.string().email('Недействительный email').required('Необходимо ввести email'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Телефон введен некорректно')
		.required('Необходимо ввести телефон'),
	from: yup.string().required('Необходимо ввести место отправления'),
	to: yup.string().required('Необходимо ввести место назначения'),
	cargo: yup.string().required('Необходимо ввести наименование груза'),
	feedback: yup.string().required('Необходимо выбрать способ связи'),
	social: yup.string().required('Необходимо выбрать способ связи'),
	question: yup.string().required('Необходимо ввести ваш вопрос'),
	text: yup.string().required('Необходимо ввести ваш отзыв'),
	agreement: yup
		.string()
		.required('Необходимо дать согласие')
		.matches(checked, 'Необходимо дать согласие'),
	file: yup.mixed().test(
			'empty-file',
			'Файл не выбран',
			value => value && value[0],
		),
		
}

export const basicForm = yup.object().shape({
	name: schemes.name,
	phone: schemes.phone,
	agreement: schemes.agreement
})

export const formPopup = yup.object().shape({
	name: schemes.name,
	phone: schemes.phone,
	email: schemes.email,
	agreement: schemes.agreement
})

export const formVacancy = yup.object().shape({
	name: schemes.name,
	phone: schemes.phone,
	email: schemes.email,
	agreement: schemes.agreement,
	file: schemes.file
})
