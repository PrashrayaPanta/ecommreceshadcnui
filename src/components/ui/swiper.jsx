
// import Swiper core and required modules
import { Navigation , Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import 'swiper/css/pagination';

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={20} // Adjust spacing between slides
      slidesPerView={2} // Show one slide at a time
      loop={true} // Enable looping of slides
      navigation={true} // Enable navigation buttons
      modules={[Navigation]} // Include the Navigation module
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="../../../slider-1.jpg" alt="Slide 1" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../slider-2.jpg" alt="Slide 2" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../slider-3.jpg" alt="Slide 3" className="w-full h-auto" />
      </SwiperSlide>
      
    </Swiper>
  );
}

export default SwiperComponent;
