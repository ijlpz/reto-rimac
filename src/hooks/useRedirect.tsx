import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserInfo } from '@/utils/storage';

const useRedirect = () => {
  const initialUserInfo = getUserInfo();
  const { push: NavigateTo } = useRouter();

  useEffect(() => {
    if (!initialUserInfo) {
      NavigateTo('/');
    }
  }, [initialUserInfo, NavigateTo]);

};

export default useRedirect;
