import styles from "./Input.module.scss";

interface InputProps {
  inputId: string;
  inputLabel: string;
  inputType: string;
  inputName: string;
  textAlign?: "left" | "center";
  width?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  inputId,
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
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        id={inputId}
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
