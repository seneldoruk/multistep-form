import { useFormContext } from "react-hook-form";
import { FormInput } from "../schema";
type RadioButtonProps = {
  text: string;
};
export default function RadioButton({ text }: RadioButtonProps) {
  const { register } = useFormContext<FormInput>();
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="radio"
          className="radio checked:bg-blue-500"
          value={text}
          {...register("salary")}
        />
        <span className="label-text ml-2">{text}</span>
      </label>
    </div>
  );
}
