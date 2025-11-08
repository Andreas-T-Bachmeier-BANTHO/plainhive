import { useEffect } from 'react';

export default function BrowserRouter({ basename = '/', children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__PLAINHIVE_BASENAME__ = basename;
    }
  }, [basename]);

  return <>{children}</>;
}
