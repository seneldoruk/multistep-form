import IconTextInput from "../components/IconTextInput";
import { EmailSVG, NameSVG, PhoneSVG } from "../components/Svgs";

export default function FormFirstStep() {
  return (
    <>
      <IconTextInput icon={<NameSVG />} placeholder={"Full Name"} />
      <IconTextInput icon={<EmailSVG />} placeholder={"Email"} />
      <IconTextInput icon={<PhoneSVG />} placeholder={"Phone Number"} />
    </>
  );
}
