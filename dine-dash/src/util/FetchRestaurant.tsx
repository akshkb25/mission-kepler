import { useEffect, useState } from "react";
import { fetchAPI, Restaurant } from "../services/Restaurant";
import { restaurantsAPI } from "../constants/Constants";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchAPI(restaurantsAPI);
        setRestaurants(data);
      } catch (err) {
        setError("Data not fetched");
      }
    };
    getRestaurants();
  }, []);

  return { restaurants, error };
};

export default useFetchRestaurants;
