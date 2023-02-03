import Image from 'next/image';

export default function ThankYouMessage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[80vh] place-items-center">
      <div className="bg-[#0228ff7e] w-full h-96 md:h-full relative">
        <Image
          src={`/Saly-22.png`}
          fill
          style={{ objectFit: 'contain' }}
          alt="3d illustration"
          priority
        />
      </div>
      <div className="p-12 lg:p-24">
        <div className="text-center grid gap-6 mb-16 text-[#434058]">
          <h1 className="text-4xl font-bold">You, win... Perfect!</h1>
          <p className="font-light">Thanks for filling out this form</p>
          <div className="mx-auto">
            <button className="rounded-2xl px-4 py-3 bg-[#434058] text-[#FCFCFC]">
              Submit new feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
