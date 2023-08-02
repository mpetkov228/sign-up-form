const errorMsg = document.querySelector('.error-msg');

function checkPasswords(form) {
    let pass = form.pass.value;
    let repass = form.repass.value;
    
    if (pass == '') {
        errorMsg.style.visibility = 'visible';
        return false;
    } else if (repass == '') {
        errorMsg.style.visibility = 'visible';
        return false;
    } else if (pass != repass) {
        errorMsg.style.visibility = 'visible';
        return false;
    } else {
        errorMsg.style.visibility = 'hidden';
        return true;
    }
}