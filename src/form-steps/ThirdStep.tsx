import { Dispatch } from "react";
import IconTextInput from "../components/IconTextInput";
import {
  EmailSVG,
  EuroSVG,
  NameSVG,
  PhoneSVG,
  WarningSVG,
} from "../components/Svgs";
import FormAnimationWrapper from "./FormAnimationWrapper";
import { useFormContext } from "react-hook-form";
import { FormInput } from "../schema";

type Props = {
  setter: Dispatch<React.SetStateAction<boolean>>;
};
export default function FormThirdStep({ setter }: Props) {
  const {
    getValues,
    formState: { isValid },
  } = useFormContext<FormInput>();
  const { fullName, email, phoneNumber, salary } = getValues();

  return (
    <FormAnimationWrapper>
      <IconTextInput icon={<NameSVG />} value={fullName} />
      <IconTextInput icon={<EmailSVG />} value={email} />
      <IconTextInput icon={<PhoneSVG />} value={phoneNumber} />
      <IconTextInput icon={<EuroSVG />} value={salary} />
      {!isValid && (
        <div role="alert" className="alert alert-warning">
          <WarningSVG />
          <span className="text-center">
            You have to fill in the form correctly before submitting it
          </span>
        </div>
      )}
      {isValid && (
        <button
          className="btn btn-wide btn-primary"
          onClick={() => {
            setter(true);
          }}
        >
          Submit!
        </button>
      )}
    </FormAnimationWrapper>
  );
}
