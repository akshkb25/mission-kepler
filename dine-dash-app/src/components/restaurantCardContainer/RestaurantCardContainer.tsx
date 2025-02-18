import RestaurantCard from "../restaurantCard/RestaurantCard.tsx";
import styles from "./RestaurantCardContainer.module.scss";
import useFetchRestaurants from "../../util/FetchRestaurant.tsx";

const RestaurantCardContainer: React.FC = () => {
  const { restaurants, error } = useFetchRestaurants();

  return (
    <>
      <div className={styles.restaurantcardWrapper}>
        {restaurants?.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};

export default RestaurantCardContainer;
