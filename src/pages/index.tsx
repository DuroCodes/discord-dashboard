import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Discord Dashboard</title>
        <meta name="description" content="Discord bot dashboard demo project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn('discord')}>Sign in</button>
          </>
        )}
        {
          session && (
            <>
            Signed in as {session.user?.name} <br />
            <div>You can now access the dashboard <Link href="/manage/123">Here</Link>.</div>
            <button onClick={() => signOut()}>Sign out</button>
            </>
          )
        }
      </main>
    </>
  );
};

export default Home;
