import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 5000,
    dismissible: true,
    ripple: false,
    position: {
        x: 'center',
        y: 'center',
    },
    types: [
        {
            type: 'info',
            background: '#00bfff',
            icon: false
        },
        {
            type: 'warning',
            background: '#ffd700',
            icon: false
        },
    ]
});

let messages = document.querySelectorAll('#notyf-message');

console.log(messages);

messages.forEach(message => {
    if (message.className === 'success') {
        notyf.success(message.innerHTML);
    }

    if (message.className === 'error') {
        notyf.error(message.innerHTML);
    }

    if (message.className === 'info') {
        notyf.open({
            type: 'info',
            background: '#ffd700',
            message: '<b>Info</b> - ' + message.innerHTML,
        });
    }

    if (message.className === 'warning') {
        notyf.open({
            type: 'warning',
            background: '#ffd700',
            message: '<b>Warning</b> - ' + message.innerHTML
        });
    }
});