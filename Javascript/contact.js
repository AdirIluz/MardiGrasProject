const btn2 = document.getElementById("btn2");
const popupWrapper = document.getElementById("popupWrapper");
const close = document.getElementById("popup-close");
const message = document.getElementById("message");

btn2.addEventListener('click', function () {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email2");
    const error = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    let isValid = true;

    if (fullName.value == '') {
        error.innerHTML = "Enter Your Full Name!";
        fullName.focus();
        isValid = false;
    } else {
        error.innerHTML = "";
    }

    if (email.value == '') {
        errorEmail.innerHTML = "Enter Your Email!";
        email.focus();
        isValid = false;
    }
    else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        errorEmail.innerHTML = "Make Sure Your Email is correct";
        email.focus();
        isValid = false;
    }

    if (isValid) {
        popupWrapper.style.display = "block";
        email.value = "";
        fullName.value = "";
        message.value = "";
        error.innerText = "";
        errorEmail.innerHTML = "";
    }
});

close.addEventListener('click', function () {
    popupWrapper.style.display = "none";
});