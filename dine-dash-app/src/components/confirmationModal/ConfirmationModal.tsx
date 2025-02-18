import styles from "./confirmationModal.module.scss";

interface ModalProps {
  persons: number;
  restaurantName: string;
  formattedDate: string;
  timeOfDay: string;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  persons,
  restaurantName,
  formattedDate,
  timeOfDay,
}) => {
  return (
    <>
      <div className={styles.confirmationModal}>
        <p>
          We have reserved a table for{" "}
          <span className={styles.highlightText}>{persons} </span> at the{" "}
          <span className={styles.highlightText}>{restaurantName} </span> for the {" "}
          <span className={styles.highlightText}>{timeOfDay} </span> of {" "}
          <span className={styles.highlightText}>{formattedDate} </span>. You
          will receive an email and a text message with the details.
        </p>
        <div className={styles.footerText}>
          For cancellation or further queries contact the restaurants
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
