'use client';

import {SessionProvider, SessionProviderProps} from 'next-auth/react';
import React from 'react';
import {ActiveThemeProvider} from '../active-theme';
import ThemeProvider from './ThemeToggle/theme-provider';

export default function Providers({
  session,
  activeThemeValue,
  children,
}: {
  session: SessionProviderProps['session'];
  activeThemeValue: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
        <ActiveThemeProvider initialTheme={activeThemeValue}>
          <SessionProvider session={session}>{children}</SessionProvider>
        </ActiveThemeProvider>
      </ThemeProvider>
    </>
  );
}
