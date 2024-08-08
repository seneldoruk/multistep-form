import IconTextInput from "../components/IconTextInput";
import { NameSVG } from "../components/Svgs";

export default function FormFirstStep() {
  return <IconTextInput icon={<NameSVG />} placeholder={"Full Name"} />;
}
