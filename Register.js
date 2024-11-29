document.getElementById('regform').addEventListener('submit', function (e) {
    e.preventDefault();

    const Fname = document.getElementById('fname').value.trim();
    const Lname = document.getElementById('lname').value.trim();
    const Email = document.getElementById('email').value.trim();
    const Pass = document.getElementById('pass').value.trim();
    const Cpass = document.getElementById('cpass').value.trim();
    const Tnc = document.getElementById('tnc').checked;

    const fnameerror = document.getElementById('fname-error');
    const lnameerror = document.getElementById('lname-error');
    const emailerror = document.getElementById('email-error');
    const passerror = document.getElementById('pass-error');
    const cpasserror = document.getElementById('cpass-error');
    const tncerror = document.getElementById('tnc-error');

    
    fnameerror.classList.remove('visible');
    lnameerror.classList.remove('visible');
    emailerror.classList.remove('visible');
    passerror.classList.remove('visible');
    cpasserror.classList.remove('visible');
    tncerror.classList.remove('visible');

    let isValid = true;

    if (!Fname) {
        fnameerror.classList.add('visible');
        isValid = false;
    }

    if (!Lname) {
        lnameerror.classList.add('visible');
        isValid = false;
    }

    if (!validateEmail(Email)){
        emailerror.classList.add('visible');
        isValid = false;
    }

    if (Pass.length < 8) {
        passerror.classList.add('visible');
        isValid = false;
    }

    if (Pass !== Cpass) {
        cpasserror.classList.add('visible');
        isValid = false;

    }

    if (!Tnc) {
        tncerror.classList.add('visible');
        isValid = false;
    }

    if (isValid) {
        alert ('Registration successful');
    }
})

function validateEmail(Email){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(Email);
}


