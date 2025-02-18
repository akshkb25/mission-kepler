import Slider from "react-slick";
import useCarousel from "../../util/FetchCarousel";
import styles from "./Carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const { carousel, error } = useCarousel();


  if (error) {
    return <p>Failed to load carousel. Please try again later.</p>;
  }

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.carouselWrapper}>
      <Slider {...settings}>
        {carousel?.map((item, index) => {
          return (
            <div className={styles.carouselContainer} key={index}>
              <div
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${item.imageSrc})` }}
              ></div>
              <p>{item.description}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
