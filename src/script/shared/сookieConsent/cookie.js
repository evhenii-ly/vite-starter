const elements = {
  cookieNotifier: document.getElementById('cookieNotifier'),
  buttonAccept: document.getElementById('cookieAccept'),
};

const showCookieNotifier = () => {
  elements.cookieNotifier.classList.remove('cookie--hide');
};

const hideCookieNotifier = () => {
  elements.cookieNotifier.classList.add('cookie--hide');
};

const checkCookieConsent = () => {
  const consent = getCookie('cookieConsent');

  if (!consent) {
    showCookieNotifier();
  }
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const cookie = () => {
  const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
  };

  const acceptCookieConsent = () => {
    setCookie('cookieConsent', 'true', 365);
    hideCookieNotifier();
  };

  if (elements.cookieNotifier) {
    checkCookieConsent();

    if (elements.buttonAccept) {
      [elements.buttonAccept].forEach((button) => {
        button.addEventListener('click', acceptCookieConsent);
      });
    }
  }
};

export { checkCookieConsent, cookie };
