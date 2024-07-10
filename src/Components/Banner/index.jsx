import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function BannerCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const bannerImages = ["./banner-1.jpg", "./banner-2.jpg", "./banner-3.jpg"];

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      draggable={false}
      infinite
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      {bannerImages.map((imagePath, index) => (
        <div key={index}>
          <img
            src={imagePath}
            alt={`Banner ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default BannerCarousel;
