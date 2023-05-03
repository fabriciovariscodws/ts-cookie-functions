export function getCookie(name: string): { [key: string]: string } | null {
  const cookies = document.cookie.split('; ');

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name && cookie.includes(`${name}=${cookieValue}`)) {
      return JSON.parse(cookieValue);
    }
  }

  return null;
}

export function removeCookie(name: string, path = '/') {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}

export function setCookie(
  name: string,
  value: { [key: string]: string },
  expires?: number,
  path = '/'
) {
  const cookieValue = JSON.stringify(value);
  const expirationDate = expires ? new Date(Date.now() + expires * 24 * 60 * 60 * 1000) : null;
  const expirationString = expirationDate ? `expires=${expirationDate.toUTCString()}; ` : '';

  document.cookie = `${name}=${cookieValue}; ${expirationString} path=${path};`;
}
