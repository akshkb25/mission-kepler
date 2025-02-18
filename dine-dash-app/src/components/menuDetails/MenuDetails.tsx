import { MenuItem } from "../../services/Restaurant";
import styles from "./MenuDetails.module.scss";

interface MenuProps {
  menuItems: MenuItem[];
  restaurantName: string;
}

const MenuDetails: React.FC<MenuProps> = ({ menuItems, restaurantName }) => {
  return (
    <div className={styles.menuContainer}>
      <h1>{restaurantName}</h1>
      {menuItems?.map((item,index) => {
        return (
          <div className={styles.menuDetailsSection} key={index}>
            <div className={styles.menuImgContainer}>
              <img src={item.imageSrc} alt={item.name} />
            </div>
            <div className={styles.menuDescriptionContainer}>
              <p className={styles.menuName}>{item.name}</p>
              <p className={styles.menuDescription}>{item.description}</p>
              <p className={styles.menuPrice}>{"$" + item.Price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuDetails;
