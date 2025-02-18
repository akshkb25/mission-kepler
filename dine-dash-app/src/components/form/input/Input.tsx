import styles from "./Input.module.scss";

interface InputProps {
  inputId: number;
  inputLabel: string;
  inputType: string;
  inputName: string;
  checked?: boolean;
  textAlign?: "left" | "center";
  width?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  inputType,
  inputName,
  inputLabel,
  textAlign,
  value,
  width,
  onChange,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={inputName}>{inputLabel}</label>
      <input
        type={inputType}
        name={inputName}
        value={value}
        onChange={onChange}
        style={{ textAlign: textAlign, width: width }}
      />
    </div>
  );
};

export default Input;
