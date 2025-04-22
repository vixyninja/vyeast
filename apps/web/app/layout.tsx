import './globals.css';
import './theme.css';

import type {Metadata, Viewport} from 'next';

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b',
};

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn',
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <h1>HIHI</h1>
        {children}
      </body>
    </html>
  );
}
