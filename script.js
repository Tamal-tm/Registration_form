function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirmPassword').style.borderColor = 'red';
        return false;
    } else {
        document.getElementById('password').style.borderColor = '#4caf50';
        document.getElementById('confirmPassword').style.borderColor = '#4caf50';
    }

    return true;
}
