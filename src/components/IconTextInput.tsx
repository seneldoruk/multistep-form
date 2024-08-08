type IconTextInputProps = {
  icon: React.ReactNode;
  placeholder: string;
};
export default function IconTextInput({
  icon,
  placeholder,
}: IconTextInputProps) {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        {icon}
        <input type="text" className="grow" placeholder={placeholder} />
      </label>
    </>
  );
}
