import HomeLayout from '@/components/layouts/HomeLayout';
import FeedbackForm from '@/components/ui/FeedbackForm';
import ThankYouMessage from '@/components/ui/ThankYouMessage';
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
        <section className="md:rounded-3xl md:shadow-lg bg-[#fcfcfc37] overflow-hidden max-w-7xl mx-auto">
          <FeedbackForm />
          <ThankYouMessage />
        </section>
      </HomeLayout>
    </>
  );
}
