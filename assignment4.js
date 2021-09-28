"use strict";

// global variables
var profile = {};

function activateFirstName() {
    var input = document.getElementById("firstNameInfo");
    var errorDiv = document.getElementById("firstNameError");
    try {
            if (input.value === "") {
                throw "Please fill in your first name";
            }
            errorDiv.style.display = "none";
            // copy input value to profile object
            profile.firstName = input.value;
            // copy profile value to profile section
            document.getElementById("yourFirstName").innerHTML = profile.firstName;
            // make profile section and email section visible
            document.getElementById("yourInfo").style.display = "block";
            document.getElementById("profile").style.display = "block";
            document.getElementById("proFirstName").style.display = "block";
        }
            catch (message) {
                // display error message
                errorDiv.innerHTML = message;
                errorDiv.style.display = "block";
                // change input style
                input.style.background = "rgb(255,233,233)";
            }
}

function activateLastName() {
    var input = document.getElementById("lastNameInfo");
    var errorDiv = document.getElementById("lastNameError");
    try {
        if (input.value === "") {
            throw "Please fill in your last name";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.lastName = input.value;
        // copy profile value to profile section
        document.getElementById("yourLastName").innerHTML = profile.lastName;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urLastName").style.display = "block";
    }
    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function activateAge() {
    var input = document.getElementById("ageInfo");
    var errorDiv = document.getElementById("ageError");
    try {
        if (input.value <= 17) {
            throw "Please fill in your age";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.age = input.value;
        // copy profile value to profile section
        document.getElementById("yourAge").innerHTML = profile.age;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urAge").style.display = "block";
    }
    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function activateAddress() {
    var input = document.getElementById("addressInfo");
    var errorDiv = document.getElementById("addressError");
    try {
        if (input.value === "") {
            throw "Please fill in your address";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.address = input.value;
        // copy profile value to profile section
        document.getElementById("yourAddress").innerHTML = profile.address;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urAddress").style.display = "block";
    }
    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function activateCity() {
    var input = document.getElementById("cityInfo");
    var errorDiv = document.getElementById("cityError");
    try {
        if (input.value === "") {
            throw "Please fill in your city";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.city = input.value;
        // copy profile value to profile section
        document.getElementById("yourCity").innerHTML = profile.city;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urCity").style.display = "block";
    }

    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }

}
function activatePostalCode() {
    var input = document.getElementById("PostalCodeInfo");
    var errorDiv = document.getElementById("postalCodeError");
    try {
        if (input.value === "") {
            throw "Please fill in your postal code";
        }
        //A valid canadian postcode is:
        //in the format A1A 1A1, where A is a letter and 1 is a digit.
        //a space separates the third and fourth characters.
        //do not include the letters D, F, I, O, Q or U.
        //the first position does not make use of the letters W or Z.
        if (/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test(input.value.toUpperCase()) === false) {
            throw "Please fill in a valid  postal code";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.postalCode = input.value.toUpperCase();
        // copy profile value to profile section
        document.getElementById("yourPostalCode").innerHTML = profile.postalCode;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urPostalCode").style.display = "block";
    }
    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}

function activateProvince() {
    var input = document.getElementById("provinceInfo");
    var errorDiv = document.getElementById("provinceError");
    try {
        if (input.value === "") {
            throw "Please fill in your province";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.province = input.value;
        // copy profile value to profile section
        document.getElementById("yourProvince").innerHTML = profile.province;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urPostalCode").style.display = "block";
    }
    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function activateEmail() {
    var input = document.getElementById("emailInfo");
    var errorDiv = document.getElementById("emailError");
    try {
        //using search option
        //if (input.value.search("@") === -1 ||
        //    input.value.lastIndexOf(".") === -1) {
        //    throw "Please fill in a valid email address";
        //}
        //using RegEx
        if (/\S+@\S+\.\S+/.test(input.value) === false) {
           
            throw "Please fill in a valid email address";
        }
        errorDiv.style.display = "none";
        // copy input value to profile object
        profile.email = input.value;
        // copy profile value to profile section
        document.getElementById("yourEmail").innerHTML = profile.email;
        // make profile section and email section visible
        document.getElementById("yourInfo").style.display = "block";
        document.getElementById("profile").style.display = "block";
        document.getElementById("urEmail").style.display = "block";
    }
    catch (message) {
        // display error message
        errorDiv.innerHTML = message;
        errorDiv.style.display = "block";
        // change input style
        input.style.background = "rgb(255,233,233)";
    }
}
function activatePassword() {
    var pw1Input = document.getElementById("PasswordInfo");
    var pw2Input = document.getElementById("confirmInfo");
    var errorDiv = document.getElementById("passwordError");
    try {
        if (pw1Input.value.length < 6) {
            throw "Password must be at least 6 characters";
        }
        if (pw1Input.value != pw2Input.value) {
            throw "Password and confirmation does not  match";
        }
        // remove any password error styling and message
        //pw1Input.style.background = "";
        //pw2Input.style.background = "";
        errorDiv.style.display = "none";
        //errorDiv.innerHTML = "";
        profile.password = "******";
        profile.confirm = "******";
    }
    catch (message) {
        // display error message
        errorDiv.style.display = "block";
        errorDiv.innerHTML = message;
        // change input style
        pw1Input.style.background = "rgb(255,233,233)";
        pw2Input.style.background = "rgb(255,233,233)";
    }
}

document.getElementById("PostalCodeInfo").addEventListener("keyup", upperCase, false);
function upperCase() {
    var input = document.getElementById("PostalCodeInfo");
    input.value = input.value.toUpperCase();
}

function accountInfo() {
    activateFirstName();
    activateLastName();
    activateAddress();
    activateCity();
    activatePostalCode();
    activateAge();
    activateEmail();
    activateProvince();
    activatePassword();

    if (Object.keys(profile).length == 10)
        document.getElementById("successMessage").style.display = "block";
        successMessage.innerHTML = "Success your Registration.";
}

// sets all form field values to defaults
function resetForm() {
    document.getElementById("yourInfo").style.display = "none";
    document.getElementById("successMessage").style.display = "none";
}

// creates event listeners
function createEventListeners() {
    document.getElementById("btnSubmit").addEventListener("click", accountInfo, false);
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);


