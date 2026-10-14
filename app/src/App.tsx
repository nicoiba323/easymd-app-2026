import { useEffect, useState } from 'react';
import { AppProvider } from './state/store';
import { AppShell } from './shell/AppShell';
import { DesignSystemPage } from './design-system/DesignSystemPage';

const isDS = () => window.location.hash === '#/design-system';

export default function App() {
  const [ds, setDs] = useState(isDS);
  useEffect(() => {
    const on = () => setDs(isDS());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  if (ds) return <DesignSystemPage />;
  return <AppProvider><AppShell /></AppProvider>;
}
