// Import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

function SwiperComponentForLatestProducts() {
  const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Navigate to the previous slide
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Navigate to the next slide
    }
  };

  return (
    <div>
      <Swiper
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={2} // Show two slides at a time
        loop={true} // Enable looping of slides
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
        modules={[Navigation]} // Include Navigation module
      >
        <SwiperSlide>
          <Link to="">
            <img
              src="../../../image-1.jpg"
              alt="Slide 1"
              className="w-full h-auto"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              src="../../../image-2.jpg"
              alt="Slide 2"
              className="w-full h-auto"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img
              src="../../../image-3.jpg"
              alt="Slide 3"
              className="w-full h-auto"
            />
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Previous and Next Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={goToPreviousSlide}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={goToNextSlide}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SwiperComponentForLatestProducts;
