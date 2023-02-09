import bgImage from "images/landing-bg-morning.png";
import { useState } from "react";

const formModel = {
  // id: "",
  timeStamp: "",
  feeling: "happy",
  thoughts: "",
  judgements: "",
  need: "love",
};

export default function Home() {
  const [formData, setFormData] = useState(formModel);
  const [isFormModelValid, setFormModelValidity] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
    
  };
  const updateFormData = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newFormData = Object.assign(
      formModel,
      { [field]: value },
      { timeStamp: Date.now() }
    );
    setFormData(newFormData);
    updateFormValidity();
  };
  const updateFormValidity = () => {
    const isValid = Object.values(formData).every(
      (value) => !!value.toString().length
    );
    setFormModelValidity(isValid);
  };
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col space-y-10 items-center p-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-5xl">Good Morning Alef!</h1>
      <form
        className="flex flex-col items-center space-y-6"
        onSubmit={onSubmit}
      >
        <section className="flex space-x-3">
          <div className="border rounded-md p-4 flex flex-col items-center space-y-5">
            <h2>
              In <em>one</em> word, what are you FEELING right now?
            </h2>
            <select name="feeling" id="feeling" onChange={updateFormData}>
              <option value="happy">Happy</option>
              <option value="angry">Angry</option>
              <option value="sad">Sad</option>
              <option value="scared">Scared</option>
            </select>
          </div>
          <div className="border rounded-md p-4 flex flex-col items-center space-y-5">
            <h2>What THOUGHTS come to mind?</h2>
            <textarea
              className="w-full"
              name="thoughts"
              id="thoughts"
              placeholder="I think..."
              cols="20"
              rows="5"
              maxLength="100"
              onChange={updateFormData}
            ></textarea>
          </div>
          <div className="border rounded-md p-4 flex flex-col items-center space-y-5">
            <h2>What JUDGEMENTS do you have about yourself?</h2>
            <textarea
              className="w-full"
              name="judgements"
              id="judgements"
              placeholder="I think that I am..."
              cols="20"
              rows="5"
              maxLength="100"
              onChange={updateFormData}
            ></textarea>
          </div>
          <div className="border rounded-md p-4 flex flex-col items-center space-y-5">
            <h2>What do you NEED from this place?</h2>
            <select name="need" id="need" onChange={updateFormData}>
              <option value="love">I need to be loved</option>
              <option value="belonging">I need to know that I belong</option>
              <option value="ok-ness">
                I need to know that I'm ok, that I'm enough
              </option>
            </select>
          </div>
        </section>
        <button
          disabled={!isFormModelValid}
          className="border-blue-600 bg-blue-600 rounded-full py-2 px-6 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
