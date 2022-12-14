export function welcome() {
    const modal = document.querySelector('.modal');
    const modal2 = document.querySelector('.modal2');
    const divWelcome = document.querySelector('.title-div');

    modal.style.display = 'none';
    modal2.style.display = 'none';
    divWelcome.style.display = 'block';
}

export const home = document.querySelector('.link.home').addEventListener('click', welcome)

import {switchModal} from './singin.js';

export const click3 = document.querySelector('.anchor2');
click3.addEventListener('click', switchModal);