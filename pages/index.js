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
        <section className="grid md:grid-cols-12">
          <div className="bg-violet-50 md:col-span-5">
            <div className="p-10 md:p-20 flex flex-col space-y-10 md:space-y-20">
              <h1 className="text-5xl font-bold leading-snug text-violet-600">
                Feel free to drop us your feedback.
              </h1>
              <div>
                <img src="/feedback.svg" alt="Feedback" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <FeedbackForm />
          </div>
        </section>
      </HomeLayout>
    </>
  );
}
