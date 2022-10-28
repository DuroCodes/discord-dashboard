import { InferGetServerSidePropsType } from 'next';
import { useSession } from 'next-auth/react';

export const getServerSideProps = async () => {
  const data = await (
    await fetch('http://localhost:3000/api/secret')
  ).json() as { content: string; };

  return {
    props: { data },
  };
};

const ManageGuild = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session, status } = useSession();
  
  if (typeof window !== 'undefined' && status === 'loading') return null;

  if (!session) {
    return (
      <main>
        <div>
          Please sign in.
        </div>
      </main>
    )
  }

  return (
    <div>
      {data.content}
    </div>
  );
};

export default ManageGuild;
