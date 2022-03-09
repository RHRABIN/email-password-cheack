document.getElementById('submit-button').addEventListener('click', function () {
    const emailText = document.getElementById('staticEmail');
    const email = emailText.value;
    const passwordText = document.getElementById('inputPassword');
    const password = passwordText.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(password)) {
        error2('')
        error('Success')

    }
    else {
        error('')
        error2('Email or password Not valid')
    }

    emailText.value = ""
})
const error = (err) => {
    document.getElementById('error').innerText = err;
}
const error2 = (err) => {
    document.getElementById('error2').innerText = err;
}