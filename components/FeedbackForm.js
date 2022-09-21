import { Button, Input, TextArea } from './Inputs';

export default function FeedbackForm() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="bg-white rounded-xl shadow-lg my-5"
      onSubmit={handleSubmit}
    >
      {/* Form Header */}
      <div className="bg-[#2A2B50] p-10 rounded-t-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Did you enjoy our service?</h2>
        <h3>Send us your feedback!</h3>
      </div>

      <div className="p-10 lg:px-20 text-[#2A2B50]">
        {/* Form Content */}
        <div>
          {/* First Name */}
          <Input
            id={`firstName`}
            label={`Your First Name`}
            placeholder={`Fill in your first name`}
            type={`text`}
            onChange={(e) => console.log(e)}
          />

          {/* Last Name */}
          <Input
            id={`lastName`}
            label={`Your Last Name`}
            placeholder={`Fill in your last name`}
            type={`text`}
            onChange={(e) => console.log(e)}
          />

          {/* Feedback */}
          <TextArea
            id={`feedback`}
            label={`Your Feedback`}
            placeholder={`Describe your experience...`}
            onChange={(e) => console.log(e)}
          />
        </div>

        {/* Submit Button */}
        <Button type={`submit`}>Send Feedback</Button>
      </div>
    </form>
  );
}
