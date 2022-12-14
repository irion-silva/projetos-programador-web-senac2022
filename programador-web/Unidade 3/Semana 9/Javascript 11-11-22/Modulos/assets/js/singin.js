export const switchModal = () => {
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

export const click = document.querySelector('.link.sign_in');
click.addEventListener('click', switchModal);

export function auth() {
    const input = document.getElementById('user');
    const password = document.getElementById('password');
    const LSuser = localStorage.getItem('user');
    const LSpassword = localStorage.getItem('password');
    if (input.value == LSuser && password.value == LSpassword) {
        alert("Login Successful");
        input.value = '';
        password.value = '';
    } else {
        alert("User or Password wrong");
    }
}

export const btnSingIn = document.querySelector('.submitBtn').addEventListener('click', auth);