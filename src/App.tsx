import { useState } from "react";
import Pagination from "./components/Pagination";
import FormFirstStep from "./form-steps/FirstStep";
import FormSecondStep from "./form-steps/SecondStep";
import FormThirdStep from "./form-steps/ThirdStep";

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center transition ease-in-out">
        <div className="card bg-neutral text-center items-center w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl mb-8">Register</h2>
            {step == 1 && <FormFirstStep />}
            {step == 2 && <FormSecondStep />}
            {step == 3 && <FormThirdStep />}
            <div className="card-actions justify-end">
              <Pagination activePage={step} totalPages={3} setter={setStep} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
