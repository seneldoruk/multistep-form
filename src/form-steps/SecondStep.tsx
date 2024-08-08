import { PropsWithChildren } from "react";
import RadioButton from "../components/RadioButton";
import FormAnimationWrapper from "./FormAnimationWrapper";

export default function FormSecondStep() {
  return (
    <FormAnimationWrapper>
      <h3 className="text-xl my-3">What is your monthly salary?</h3>
      <div className="flex flex-row justify-between items-start">
        <RadioButtonContainer>
          <RadioButton text={"0 - 1.000"} />
          <RadioButton text={"1.000 - 2.000"} />
          <RadioButton text={"2.000 - 3.000"} />
        </RadioButtonContainer>
        <RadioButtonContainer>
          <RadioButton text={"3.000 - 4.000"} />
          <RadioButton text={"> 4.000"} />
        </RadioButtonContainer>
      </div>
    </FormAnimationWrapper>
  );
}

function RadioButtonContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-start justify-between mx-3">
      {children}
    </div>
  );
}
