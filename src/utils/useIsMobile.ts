import { useEffect, useState } from 'react';

const useIsMobile = ():boolean => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = (): void => setWidth(window.innerWidth);
    if (width === 0) setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  return width <= 768 && width > 0;
};

export default useIsMobile;
