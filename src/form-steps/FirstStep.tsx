import IconTextInput from "../components/IconTextInput";
import { EmailSVG, NameSVG, PhoneSVG } from "../components/Svgs";
import FormAnimationWrapper from "./FormAnimationWrapper";

export default function FormFirstStep() {
  return (
    <FormAnimationWrapper>
      <IconTextInput
        icon={<NameSVG />}
        placeholder={"Full Name"}
        registerAs="fullName"
      />
      <IconTextInput
        icon={<EmailSVG />}
        placeholder={"Email"}
        registerAs="email"
      />
      <IconTextInput
        icon={<PhoneSVG />}
        placeholder={"Phone Number"}
        registerAs="phoneNumber"
      />
    </FormAnimationWrapper>
  );
}
