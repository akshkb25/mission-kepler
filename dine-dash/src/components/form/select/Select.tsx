import styles from "./Select.module.scss";

interface SelectProps {
  items: any[];
  label: string;
  inputId: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select: React.FC<SelectProps> = ({ items, label, inputId, onChange }) => {
  return (
    <div className={styles.formSelectContainer}>
      <label htmlFor={inputId}>{label}</label>
      <select key={inputId} id={inputId} onChange={onChange}>
        {items?.map((item, index) => (
          <option value={item.name} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
