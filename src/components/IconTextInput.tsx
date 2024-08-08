import { useFormContext } from "react-hook-form";

type IconTextInputProps =
  | {
      icon: React.ReactNode;
      placeholder: string;
      registerAs: string;
    }
  | {
      icon: React.ReactNode;
      value: string;
    };
export default function IconTextInput({ icon, ...props }: IconTextInputProps) {
  const { register, formState } = useFormContext();
  if ("placeholder" in props) {
    const { placeholder, registerAs } = props;
    console.log(formState.errors);
    return (
      <>
        <label
          className={`input input-bordered flex items-center gap-2 my-2 ${
            formState.errors[registerAs] && "input-error"
          }`}
        >
          {icon}
          <input
            id={registerAs}
            type="text"
            className="grow "
            placeholder={placeholder}
            {...register(registerAs)}
          />
        </label>
      </>
    );
  }
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 my-2 input-disabled">
        {icon}
        <input type="text" className="grow" value={props.value} readOnly />
      </label>
    </>
  );
}
