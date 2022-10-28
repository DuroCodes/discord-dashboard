import '~/styles/globals.css';
import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

const MyApp: AppType<{ session: Session | null; }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider >
    </SessionProvider>
  );
};

export default MyApp;
