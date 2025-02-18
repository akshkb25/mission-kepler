import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  id: string;
  checked: boolean;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  label,
  name,
  value,
  onChange
}) => {
  return (
    <>
      <div className={styles.checkboxGroup}>
        
        <input
          id={id}
          type="checkbox"
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </>
  );
};

export default Checkbox;
