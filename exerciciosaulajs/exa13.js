function validateEmail(e){
    let field = e.target;
    let fieldValue = field.value;

    if(fieldValue.search('@') == -1) {
        displayError('Email não é valido', field);
    }else{
        clearError(field);
    }

    field.classList.remove('not-validate');
    checkEnableSubmit();
}

function validateNotEmpty(e){
    let field = e.target;
    let fieldValue = field.value;

    if(fieldValue == ' ') {
        displayError('Campo não pode ficar vazio', field);
    }else{
        clearError(field);
    }

    field.classList.remove('not-validate');
    checkEnableSubmit();
}

function displayError(message, field) {
    clearError(field)
    field.classList.add('is-invalid');
    let error = document.createElement('small');
    error.style.color = 'red';
    error.classList.add('error-message');
    field.parentElement.appendChild(error);

}

function clearError(field) {
    let container = field.parentElement;
    let error = container.querySelector('.error-message');

    if(error){
        container.removeChild(error);
    }
    field.classList.remove('is-invalid');
}

function checkEnableSubmit() {
    let form = document.querySelector('#form');
    let notValidate = form.querySelectorAll('.not-validate');
    let erros = form.querySelectorAll('.is-invalid');

    if(erros.length == 0 && notValidate.length == 0) {
      console.log('enableSubmit')
        enableSubmit();
    }else{
        disableSubmit();
    }

}

function enableSubmit() {
    let form = document.querySelector('#form');
    let submit = document.getElementById('boton');

    submit.disabled = false;
}

function disableSubmit() {
    let form = document.querySelector('#form');
    let submit = document.getElementById('boton');

    submit.disabled = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add 
('not-validate'));
document.querySelectorAll('input.email').forEach(el => el.addEventListener
('keyup', validateEmail));
document.querySelectorAll('input:required').forEach(el => el.addEventListener
('keyup', validateNotEmpty)) 
