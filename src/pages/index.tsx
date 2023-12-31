import Head from 'next/head';

import { Button } from 'antd';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Characters App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button type="primary">Button</Button>
      </main>
    </>
  );
}
