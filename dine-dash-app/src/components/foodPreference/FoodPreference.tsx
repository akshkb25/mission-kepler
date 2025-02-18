import styles from "./FoodPreference.module.scss";

interface FoodPreference {
  color: string;
}
const FoodPreference: React.FC<FoodPreference> = ({ color }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.badgeContainer}
        style={{ border: `1px solid ${color}` }}
      >
        <span className={styles.circle} style={{ background: `${color}` }} />
      </div>
    </div>
  );
};

export default FoodPreference;
