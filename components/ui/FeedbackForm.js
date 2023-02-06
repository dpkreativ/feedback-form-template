import Image from 'next/image';

export default function FeedbackForm() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[80vh] place-items-center">
      <div className="bg-[#1e26ff8c] w-full h-96 md:h-full relative">
        <Image
          src={`/Saly-35.png`}
          fill
          style={{ objectFit: 'contain' }}
          alt="3d illustration"
          priority
        />
      </div>
      <div className="p-12 lg:p-24">
        <div className="text-center grid gap-6 mb-16 text-[#434058]">
          <h1 className="text-4xl font-bold">
            We'd love to hear back from you
          </h1>
          <p className="font-light">
            Fill out the form below and we'll be in touch as soon as possible
          </p>
        </div>
        <form className="grid gap-16">
          <div className="border-2 border-[#434058] rounded-2xl p-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="w-full outline-none placeholder:text-sm placeholder:font-light placeholder:text-[#43405874]"
            />
          </div>
          <div className="border-2 border-[#434058] rounded-2xl p-4">
            <textarea
              name="feedback"
              id="feedback"
              placeholder="Your feedback"
              className="w-full outline-none placeholder:text-sm placeholder:font-light placeholder:text-[#43405874]"
            ></textarea>
          </div>
          <div className="mx-auto">
            <button
              type="submit"
              className="rounded-2xl px-4 py-3 bg-[#434058] text-[#FCFCFC]"
            >
              Submit feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
