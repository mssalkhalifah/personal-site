"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

interface IThemesProvider {
  children: React.ReactNode;
}

const Provider: React.FC<IThemesProvider> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};

export default Provider;
