import Head from 'next/head';
import HomeLayout from '../components/layouts/HomeLayout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Feedback Form - Neon Lounge and Bar</title>
        <meta
          name="description"
          content="Feedback Form - Neon Lounge and Bar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>Neon Lounge &amp; Bar</HomeLayout>
    </div>
  );
}
