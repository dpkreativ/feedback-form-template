import HomeLayout from '@/components/layouts/HomeLayout';
import FeedbackForm from '@/components/ui/FeedbackForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Feedback Form</title>
        <meta name="description" content="Feedback Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <section>
          <FeedbackForm />
        </section>
      </HomeLayout>
    </>
  );
}
