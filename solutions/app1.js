'use strict';

const setCookie = (tokenValue) => {
    const now = new Date();
    now.setTime(now.getTime() + (15 * 60* 1000));
    const expires = now.toUTCString();
    document.cookie = `token=${tokenValue}; expires=${expires}; path=/`;
};

export default setCookie;
