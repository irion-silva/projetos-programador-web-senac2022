const switchModal = () => {
    const modal = document.querySelector('.modal');
    const modal2 = document.querySelector('.modal2');
    const divWelcome = document.querySelector('.title-div');
    const actualStyle = modal.style.display;

    if (actualStyle == 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        modal2.style.display = 'none';
        divWelcome.style.display = 'none'
        const input = document.querySelector('.user');
        input.focus();
    }
}

const switchModal2 = () => {
    const modal = document.querySelector('.modal');
    const modal2 = document.querySelector('.modal2');
    const divWelcome = document.querySelector('.title-div');
    const actualStyle2 = modal2.style.display;

    if (actualStyle2 == 'block') {
        modal2.style.display = 'none';
    } else {
        modal2.style.display = 'block';
        modal.style.display = 'none';
        divWelcome.style.display = 'none'
        const input2 = document.querySelector('.user2');
        input2.focus();
    }
}

const click = document.querySelector('.link.sign_in');
click.addEventListener('click', switchModal);

const click2 = document.querySelector('.anchor');
click2.addEventListener('click', switchModal2);

const click3 = document.querySelector('.anchor2');
click3.addEventListener('click', switchModal);

const home = document.querySelector('.link.home').addEventListener('click', function() {
    const modal = document.querySelector('.modal');
    const modal2 = document.querySelector('.modal2');
    const divWelcome = document.querySelector('.title-div');

    modal.style.display = 'none';
    modal2.style.display = 'none';
    divWelcome.style.display = 'block';
})

const btnSingUp = document.querySelector('.submitBtn2').addEventListener('click', function () {
    const input2 = document.getElementById('user2');
    const password2 = document.getElementById('password2');
    const confPassword = document.getElementById('password3');
    if (password2.value == confPassword.value) {
        localStorage.setItem('user', input2.value);
        input2.value = '';
        localStorage.setItem('password', password2.value);
        password2.value = '';
        localStorage.setItem('confPassword', confPassword.value);
        confPassword.value = '';
    } else {
        alert("Passwords don't matches.");
    }
})

const btnSingIn = document.querySelector('.submitBtn').addEventListener('click', function() {
    const input = document.getElementById('user');
    const password = document.getElementById('password');
    const LSuser = localStorage.getItem('user');
    const LSpassword = localStorage.getItem('password');
    if(input.value == LSuser && password.value == LSpassword) {
        alert("Login Successful");
        input.value = '';
        password.value = '';
    } else {
        alert("User or Password wrong")
    }
})
