import { motion } from "framer-motion";
import IconTextInput from "../components/IconTextInput";
import { EmailSVG, NameSVG, PhoneSVG } from "../components/Svgs";

export default function FormFirstStep() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <IconTextInput icon={<NameSVG />} placeholder={"Full Name"} />
      <IconTextInput icon={<EmailSVG />} placeholder={"Email"} />
      <IconTextInput icon={<PhoneSVG />} placeholder={"Phone Number"} />
    </motion.div>
  );
}
