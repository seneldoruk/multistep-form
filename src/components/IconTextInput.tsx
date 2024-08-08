type IconTextInputProps =
  | {
      icon: React.ReactNode;
      placeholder: string;
    }
  | {
      icon: React.ReactNode;
      value: string;
    };
export default function IconTextInput({ icon, ...props }: IconTextInputProps) {
  if ("placeholder" in props) {
    return (
      <>
        <label className="input input-bordered flex items-center gap-2 my-2">
          {icon}
          <input type="text" className="grow" placeholder={props.placeholder} />
        </label>
      </>
    );
  }
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 my-2 input-disabled">
        {icon}
        <input type="text" className="grow" value={props.value} />
      </label>
    </>
  );
}
