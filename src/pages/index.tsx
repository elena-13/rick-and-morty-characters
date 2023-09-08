import Link from 'next/link';

import { Image } from 'antd';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <Link href="/characters">
        <Image
          src="https://images2.alphacoders.com/633/633159.jpg"
          alt="Description of Image"
          style={{ height: '100%', objectFit: 'cover' }}
          preview={false}
        />
      </Link>
    </Layout>
  );
}
