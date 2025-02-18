import { useEffect, useState } from "react";
import { CarouselItem, fetchAPI } from "../services/Restaurant";
import { carouselAPI } from "../constants/Constants";

const useCarousel = () => {
  const [carousel, setCarousel] = useState<CarouselItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCarousel = async () => {
      try {
        const data = await fetchAPI(carouselAPI);
        setCarousel(data);
      } catch (err) {
        setError("Data not fetched");
      }
    };
    getCarousel();
  }, []);

  return { carousel, error };
};

export default useCarousel;
