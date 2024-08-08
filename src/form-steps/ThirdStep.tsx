import IconTextInput from "../components/IconTextInput";
import { EmailSVG, EuroSVG, NameSVG, PhoneSVG } from "../components/Svgs";
import FormAnimationWrapper from "./FormAnimationWrapper";

export default function FormThirdStep() {
  return (
    <FormAnimationWrapper>
      <IconTextInput icon={<NameSVG />} value={"John Mustermann"} />
      <IconTextInput icon={<EmailSVG />} value={"muster@muster.com"} />
      <IconTextInput icon={<PhoneSVG />} value={"1511111111"} />
      <IconTextInput icon={<EuroSVG />} value={"> 4000"} />
      <button className="btn btn-wide btn-primary">Submit!</button>
    </FormAnimationWrapper>
  );
}
