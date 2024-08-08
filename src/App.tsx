import { useState } from "react";
import Pagination from "./components/Pagination";
import FormFirstStep from "./form-steps/FirstStep";
import FormSecondStep from "./form-steps/SecondStep";
import FormThirdStep from "./form-steps/ThirdStep";
import FormSubmitted from "./form-steps/FormSubmitted";
import { FormInput, FormSchema } from "./schema";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setSubmitted] = useState(false);
  const formMethods = useForm<FormInput>({
    mode: "onTouched",
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, watch } = formMethods;
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setSubmitted(true);
  });
  console.log(watch(["fullName", "email", "phoneNumber", "salary"]));

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center transition ease-in-out">
        <div className="card bg-neutral text-center items-center w-96">
          <div className="card-body items-center text-center">
            {isSubmitted ? (
              <FormSubmitted />
            ) : (
              <>
                <h2 className="card-title text-3xl mb-8">Register</h2>
                <FormProvider {...formMethods}>
                  <form onSubmit={onSubmit}>
                    {step == 1 && <FormFirstStep />}
                    {step == 2 && <FormSecondStep />}
                    {step == 3 && <FormThirdStep />}
                  </form>
                </FormProvider>
                <div className="card-actions justify-end">
                  <Pagination
                    activePage={step}
                    totalPages={3}
                    setter={setStep}
                  />
                </div>
                <progress
                  className="progress w-56 my-4 [&::-webkit-progress-value]:transition-all"
                  value={step}
                  max="3"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
