export const setUserInfo = (userInfo: string): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('userInfo', userInfo);
  }
};

export const getUserInfo = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('userInfo');
  }
};

export const removeUserInfo = (): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('userInfo');
  }
};
