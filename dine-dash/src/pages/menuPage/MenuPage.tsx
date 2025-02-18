import { useParams } from "react-router-dom";
import MenuDetails from "../../components/menuDetails/MenuDetails";
import useFetchRestaurants from "../../util/FetchRestaurant";
import styles from "./MenuPage.module.scss";

const MenuPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { restaurants, error } = useFetchRestaurants();
  const restaurant = restaurants.find(
    (res) => res.id.toString() === restaurantId
  );

  if (!restaurant) {
    return <h2>Restaurant not found</h2>;
  }

  return (
    <div className={styles.menuPageContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <MenuDetails
          menuItems={restaurant?.items}
          restaurantName={restaurant?.name}
        />
      </div>
    </div>
  );
};

export default MenuPage;
