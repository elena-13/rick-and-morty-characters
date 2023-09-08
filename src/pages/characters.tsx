import { useQuery, NormalizedCacheObject } from '@apollo/client';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Pagination, List, Image, Spin } from 'antd';

import { initializeApollo, useApollo } from '@/lib/apollo-client';

import Layout from '@/components/Layout/Layout';

import {
  GetCharactersQuery,
  GetCharactersDocument,
} from '@/__generated__/types';

function Characters({
  initialApolloState,
}: {
  initialApolloState: NormalizedCacheObject;
}) {
  const router = useRouter();
  const page = parseInt(router.query.page as string, 10) || 1;

  const apolloClient = useApollo(initialApolloState);

  const { loading, error, data } = useQuery<GetCharactersQuery>(
    GetCharactersDocument,
    {
      variables: { page },
      client: apolloClient,
    },
  );

  if (loading) return <Spin tip="Loading..." />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout title="Characters">
      <List
        itemLayout="horizontal"
        dataSource={data?.characters?.results || []}
        renderItem={(item) =>
          item ? (
            <List.Item>
              <List.Item.Meta
                avatar={<Image width={50} src={item.image || undefined} />}
                title={
                  <Link href={`/character/${item.id || ''}`}>{item.name}</Link>
                }
              />
            </List.Item>
          ) : null
        }
      />
      <Pagination
        current={page}
        total={data?.characters?.info?.count || 0}
        onChange={(page) => router.push(`characters/?page=${page}`)}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  let page = 1;
  if (context.query.page) {
    page = Array.isArray(context.query.page)
      ? parseInt(context.query.page[0], 10)
      : parseInt(context.query.page, 10);
  }

  await apolloClient.query({
    query: GetCharactersDocument,
    variables: { page },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Characters;
