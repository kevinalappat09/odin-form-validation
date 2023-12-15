const emailInput = document.querySelector("#email-input");
const emailError = emailInput.parentNode.querySelector(".error");

const countryInput = document.querySelector("#country-input");
const countryError = countryInput.parentNode.querySelector(".error");

const zipInput = document.querySelector("#zip-input");
const zipError = zipInput.parentNode.querySelector(".error");

const passwordInput = document.querySelector("#pass-input");
const passwordError = passwordInput.parentNode.querySelector(".error");

const cpassInput = document.querySelector("#cpass-input");
const cpassError = cpassInput.parentNode.querySelector(".error");

const formElement = document.querySelector(".form");


//Validator for email
emailInput.addEventListener("input",(event) => {
    if(emailInput.validity.valid) {
        emailError.textContent = "";
    } else {
        showEmailError();
    }
});

//Validator for country
countryInput.addEventListener("input",(event) => {
    if(countryInput.validity.valid) {
        countryError.textContent = "";
    } else {
        showCountryError();
    }
})

zipInput.addEventListener("input",(event) => {
    if(zipInput.validity.valid) {
        zipError.textContent = "";
    } else {
        showZipError();
    }
})

passwordInput.addEventListener("input",(event) => {
    if(passwordInput.validity.valid) {
        passwordError.textContent = "";
    } else{
        showPassError();
    }
})

cpassInput.addEventListener("input",(event) => {
    if(cpassInput.validity.valid) {
        cpassError.textContent = "";
    } else {
        showCPassError();
    }
    if(cpassInput.value != passwordInput.value) {
        cpassError.textContent = "Password and confirm password must match";
    }
})

formElement.addEventListener("submit",(event) => {
    if(!emailInput.valid.validity) {
        showEmailError();
    }
    if(!countryInput.valid.validity) {
        showCountryError();
    }
    if(!zipInput.valid.validity) {
        showZipError();
    }
    if(!passwordInput.valid.validity) {
        showPassError();
    }
    if(!cpassInput.valid.validity) {
        showCPassError();
    }
    event.preventDefault();
})

function showEmailError() {
    if(emailInput.validity.typeMismatch) {
        emailError.textContent = "Please enter an email";
    }
}

function showCountryError() {
    if(countryInput.validity.typeMismatch) {
        countryError.textContent = "Please enter a valid country";
    } else if(countryInput.validity.valueMissing) {
        countryError.textContent = "Please enter a value for country";
    } else if(countryInput.validity.tooShort) {
        countryError.textContent = "enter a valid country name";
    }
}

function showZipError() {
    if(zipInput.validity.typeMismatch) {
        zipError.textContent = "Only numbers allowed for zip code";
    } else if(zipInput.validity.patternMismatch) {
        zipError.textContent = "Must match the indian zip code pattern";
    } else if(zipInput.validity.valueMissing) {
        zipError.textContent = "No zip provided";
    }
}

function showPassError() {
    if(passwordInput.validity.typeMismatch) {
        passwordError.textContent = "Password does not meet requirements";
    } else if(passwordInput.validity.patternMismatch) {
        passwordError.textContent = "The password does not meet the pattern";
    } else if(passwordInput.validity.tooShort) {
        passwordError.textContent = "Password is too short";
    } else if(passwordInput.validity.tooLong) {
        passwordError.textContent = "Password is too big";
    }
}

function showCPassError() {
    if(cpassInputt.validity.typeMismatch) {
        cpassError.textContent = "Password does not meet requirements";
    } else if(cpassInput.validity.patternMismatch) {
        cpassError.textContent = "The password does not meet the pattern";
    } else if(cpassInput.validity.tooShort) {
        cpassError.textContent = "Password is too short";
    } else if(cpassInput.validity.tooLong) {
        cpassError.textContent = "Password is too big";
    }
}