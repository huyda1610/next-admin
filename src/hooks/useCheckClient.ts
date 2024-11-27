import { useEffect, useState } from 'react';

export const useCheckClient = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return { isClient };
};
