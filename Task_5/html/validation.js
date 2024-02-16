
function validateForm() {
    var user = document.getElementById('userName').value;
    var ph = document.getElementById('phone').value;
    var em = document.getElementById('email').value;

    if (user == "") {
        document.getElementById('Message').innerHTML = "Please fill username";
        return false;
    }
    if (user.length < 2) {
        document.getElementById('Message').innerHTML = "username must be 2 charecter";
        return false;
    }
    if (user.length > 15) {
        document.getElementById('Message').innerHTML = "username must be less then 15 charecter";
        return false;
    }


    if (ph == "") {
        document.getElementById('number').innerHTML = "Please fill PhoneNo";
        return false;
    }
    if (ph.length < 10) {
        document.getElementById('number').innerHTML = "number must be 10 digit";
        return false;
    }

    if (em == "") {
        document.getElementById('email').innerHTML = "Please fill email";
        return false;
    }

    // alert box
    alert('form is submitted');

}