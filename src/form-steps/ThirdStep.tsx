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

export default function FormThirdStep() {
  const {
    getValues,
    formState: { errors, dirtyFields },
  } = useFormContext<FormInput>();
  const { fullName, email, phoneNumber, salary } = getValues();
  const isValid =
    Object.keys(errors).length === 0 && Object.keys(dirtyFields).length == 4;

  return (
    <FormAnimationWrapper>
      <IconTextInput icon={<NameSVG />} value={fullName ?? undefined} />
      <IconTextInput icon={<EmailSVG />} value={email ?? undefined} />
      <IconTextInput icon={<PhoneSVG />} value={phoneNumber ?? undefined} />
      <IconTextInput icon={<EuroSVG />} value={salary ?? undefined} />
      {!isValid && (
        <div role="alert" className="alert alert-warning">
          <WarningSVG />
          <span className="text-center">
            You have to fill in the form correctly before submitting it
          </span>
        </div>
      )}
      {isValid && (
        <button className="btn btn-wide btn-primary" type="submit">
          Submit!
        </button>
      )}
    </FormAnimationWrapper>
  );
}
