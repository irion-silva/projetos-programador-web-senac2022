export const switchModal2 = () => {
    const modal = document.querySelector('.modal');
    const modal2 = document.querySelector('.modal2');
    const divWelcome = document.querySelector('.title-div');
    const actualStyle = modal2.style.display;

    if (actualStyle == 'block') {
        modal2.style.display = 'none';
    } else {
        modal2.style.display = 'block';
        modal.style.display = 'none';
        divWelcome.style.display = 'none'
        const input = document.querySelector('.user2');
        input.focus();
    }
}

export const click2 = document.querySelector('.anchor');
click2.addEventListener('click', switchModal2);

export function auth2() {
    const input = document.getElementById('user2');
    const password2 = document.getElementById('password2');
    const confPassword = document.getElementById('password3');
    if (password2.value == confPassword.value) {
        localStorage.setItem('user', input.value);
        input.value = '';
        localStorage.setItem('password', password2.value);
        password2.value = '';
        localStorage.setItem('confPassword', confPassword.value);
        confPassword.value = '';
    } else {
        alert("Passwords don't matches.");
    }
}

export const btnSingUp = document.querySelector('.submitBtn2').addEventListener('click', auth2);