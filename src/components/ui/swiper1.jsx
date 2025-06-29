// Import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        loop={true} // Enable looping of slides
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
        modules={[Navigation]} // Include Navigation module
        breakpoints={{
          // Define breakpoints for responsiveness
          640: {
            slidesPerView: 1, // 1 slide for screens >= 640px
          },
          768: {
            slidesPerView: 2, // 2 slides for screens >= 768px
          },
          1024: {
            slidesPerView: 3, // 3 slides for screens >= 1024px
          },
          1280: {
            slidesPerView: 4, // 4 slides for screens >= 1280px
          },
        }}
      >
        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <Link to="">
                <img
                  src="../../../image-1.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>

              <CardTitle className="text-center">
                Sony Alpha DSLR Camera
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="line-through font-extralight">$5000</h1>
              <h1 className="font-bold text-2xl">$500</h1>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <Link to="">
                <img
                  src="../../../image-1.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>

              <CardTitle className="text-center">
                Sony Alpha DSLR Camera
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="line-through font-extralight">$5000</h1>
              <h1 className="font-bold text-2xl">$500</h1>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <Link to="">
                <img
                  src="../../../image-1.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>

              <CardTitle className="text-center">
                Sony Alpha DSLR Camera
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="line-through font-extralight">$5000</h1>
              <h1 className="font-bold text-2xl">$500</h1>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <Link to="">
                <img
                  src="../../../image-1.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>

              <CardTitle className="text-center">
                Sony Alpha DSLR Camera
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="line-through font-extralight">$5000</h1>
              <h1 className="font-bold text-2xl">$500</h1>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <Link to="">
                <img
                  src="../../../image-1.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>

              <CardTitle className="text-center">
                Sony Alpha DSLR Camera
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h1 className="line-through font-extralight">$5000</h1>
              <h1 className="font-bold text-2xl">$500</h1>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Add To Cart
              </Button>
            </CardFooter>
          </Card>
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
