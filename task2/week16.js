const form = document.forms.formOne;

const firstName = form.elements.firstName;
const firstEmail = form.elements.firstEmail;
const firstAge = form.elements.firstAge;
const firstSelect = form.elements.firstSelect;
const password = form.elements.password;
const checkboxOne = form.elements.checkboxOne;
const firstButton = form.elements.firstButton;

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorAge = document.getElementById('errorAge');
const errorSelect = document.getElementById('errorSelect');
const errorPassword = document.getElementById('errorPassword');
const errorCheckboxOne = document.getElementById('errorCheckboxOne');

firstButton.addEventListener('click', function(evt) {
    evt.preventDefault();
	
    if (firstName.value === '') {
      errorName.textContent = 'Введите имя.';
    }

	if (firstName.value.patternMismatch) {
		errorName.textContent = 'Имя должно содержать только буквы и пробелы.';
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(firstEmail.value)) {
	  errorEmail.textContent = '';
    } else {
	  errorEmail.textContent = 'Введите email в формате *@*.*';
    }

	if (firstAge.value === '') {
		errorAge.textContent = 'Введите возраст.';
	}

	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
	if (passwordRegex.test(password.value)) {
		errorPassword.textContent = '';
	  } else {
		errorPassword.textContent = 'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру.';
	  }
	
	if (!checkboxOne.checked) {
	    errorCheckboxOne.textContent = 'Необходимо согласие на обработку данных.';
	}
});

	firstName.addEventListener('input', function () {
		errorName.textContent = '';
	});

	firstEmail.addEventListener('input', function () {
		errorEmail.textContent = '';
	});

	firstAge.addEventListener('input', function () {
		errorAge.textContent = '';
	});

	checkboxOne.addEventListener('input', function () {
		errorCheckboxOne.textContent = '';
	});

	password.addEventListener('input', function () {
		errorPassword.textContent = '';
	});