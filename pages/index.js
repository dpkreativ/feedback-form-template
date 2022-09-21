import Head from 'next/head';
import FeedbackForm from '../components/FeedbackForm';
import HomeLayout from '../components/layouts/HomeLayout';
import ThankYouMessage from '../components/ThankYouMessage';

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

      <HomeLayout>
        <section className="w-full max-w-lg">
          <h1 className="text-center mb-5 text-xl text-[#2A2B50] font-bold">
            Neon Lounge &amp; Bar
          </h1>
          <FeedbackForm />
          <ThankYouMessage />
        </section>
      </HomeLayout>
    </div>
  );
}
