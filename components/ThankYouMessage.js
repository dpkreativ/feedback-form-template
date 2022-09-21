import { Button } from './Inputs';

export default function ThankYouMessage() {
  return (
    <div className="bg-white rounded-xl shadow-lg my-5">
      <div className="bg-[#2A2B50] p-10 rounded-t-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Thank you, User!</h2>
      </div>
      <div className="p-10 lg:px-20 text-lg text-center flex flex-col space-y-3">
        <p>
          We greatly appreciate the feedback you have given us so that we can
          serve you and other customers better.
        </p>
      </div>
      <div className="w-full flex justify-center p-10 lg:px-20">
        <Button onClick={(e) => console.log(e)}>Back to Form</Button>
      </div>
    </div>
  );
}
