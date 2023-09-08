import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';

import { Spin, Avatar } from 'antd';

import { CharacterQuery, CharacterDocument } from '@/__generated__/types';

import Layout from '@/components/Layout/Layout';

function CharacterPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, loading, error } = useQuery<CharacterQuery>(CharacterDocument, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <Spin tip="Loading..." />;

  if (error) return <p>Error: {error.message}</p>;

  if (!data?.character) return <p>No character found</p>;

  return (
    <Layout title={data?.character.name || 'Character'}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src={data?.character.image}
        />
        <div>
          <h1>{data?.character.name}</h1>
          <p>{data?.character.gender}</p>
        </div>
      </div>
    </Layout>
  );
}

export default CharacterPage;
