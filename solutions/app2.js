'use strict';

const setCookie = (name, value) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60* 1000));
    const expires = now.toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
    getAll() {
        const str = document.cookie.split('; ');
        const result = {};
        for (let i in str) {
            const cur = str[i].split('=');
            result[cur[0]] = cur[1];
        }
        return result;
    },
    toSessionStorage() {
        const str = document.cookie.split('; ');
        for (let i in str) {
            const cur = str[i].split('=');
            sessionStorage.setItem(cur[0],cur[1]);
        }
    },
    flush() {
        const str = document.cookie.split('; ');
        for (let i in str) {
            const cur = str[i].split('=');
            document.cookie = `${cur[0]}=; expires= Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
    }
};

export { cookieHandler };
