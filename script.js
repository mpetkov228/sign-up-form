function checkPasswords(form) {
    let pass = form.pass.value;
    let repass = form.repass.value;
    
    if (pass == '') {
        alert('Please enter password!');
        return false;
    } else if (repass == '') {
        alert('Please enter confirm password!');
        return false;
    } else if (pass != repass) {
        alert('Passwords do not match!');
        return false;
    } else {
        alert('Success!');
        return true;
    }
}