type RadioButtonProps = {
  text: string;
};
export default function RadioButton({ text }: RadioButtonProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="radio-10"
          className="radio checked:bg-blue-500"
          defaultChecked
        />
        <span className="label-text ml-2">{text}</span>
      </label>
    </div>
  );
}
