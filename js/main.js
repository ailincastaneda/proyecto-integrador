const inputName = document.getElementById("id-name");
const inputPhone = document.getElementById("id-tel");
const inputEmail = document.getElementById("id-email");
const inputInquiry = document.getElementById("id-inquiry");
const inputPrice = document.getElementById("id-price");
const inputStock = document.getElementById("id-stock");
const inputSerialNumber = document.getElementById("id-serialNumber");
const inputBrand = document.getElementById("id-brand");



const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexPhone = /\(?(\+?[0-9]{2,4})\)?(\(?(\+?[0-9]{2,4})\)?)([0-9]{2,10})/;
const regexEmail = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_]+(\.[a-zA-Z]{2,4}){1,2}/;
const regexPrice = "";
const regexStock = /^\d[0-9]*$/;
const regexSerialNumber = /^\d{12,13}$/;


function validateEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        inputEmail.nextElementSibling.innerText = "El email ingresado es inválido";
    } else {
        inputEmail.nextElementSibling.innerText = "";
    }
}


function validate() {
    validateEmail();
}

buttonValidate.onclick = validate;