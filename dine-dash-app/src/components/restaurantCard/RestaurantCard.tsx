import styles from "./RestaurantCard.module.scss";
import { Restaurant } from "../../services/Restaurant";
import { FaCertificate } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import FoodPreference from "../foodPreference/FoodPreference.tsx";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface restaurantProp {
  restaurant: Restaurant;
}
const RestaurantCard: React.FC<restaurantProp> = ({ restaurant }) => {
  const navigate = useNavigate();
  
  return (
    <>
    {<div
      className={styles.restaurantCardContainer}
      style={{
        backgroundImage: `url(${restaurant?.restaurantImageSrc})`,
      }}
    key={restaurant.id}>
      <div className={styles.restaurantDetailsContainer}>
        <div className={styles.detailsContainer}>
          <div className={styles.detailsSection}>
              <p className={styles.restaurantName}>{restaurant.name}</p>
              <p className={styles.restaurantLocation}>{restaurant.location}</p>
              <p className={styles.restaurantTimings}>{restaurant.timings} </p>
          </div>
          <div className={styles.cuisineSection}>
              {restaurant.cuisine.map((item,index) => {
                return(
                  <p className={styles.cuisineItem} key={index}>{item}</p>
                )
              })}
              <a onClick={() => navigate(`/restaurant/${restaurant.id}`)}>VIEW MORE DETAILS <GoTriangleRight /> </a>
              
          </div>
        </div>
        <div className={styles.preferenceContainer}>
          <div className={styles.preferenceSection}>
            {restaurant.isCertified ? <FaCertificate /> : ''}
            {restaurant.type.map((typeValue,index) => {
              return typeValue == "Veg" ? (
                <FoodPreference color={"green"} key={index}/>
              ) : (
                <FoodPreference color={"red"} key={index}/>
              );
            })}
          </div>
          <div className={styles.ratingSection}>
              <p>{restaurant.rating}</p>
              <IoIosStar />
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default RestaurantCard;
