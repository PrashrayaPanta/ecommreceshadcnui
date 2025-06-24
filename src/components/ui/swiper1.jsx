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
        slidesPerView={4} // Show two slides at a time
        loop={true} // Enable looping of slides
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
        modules={[Navigation]} // Include Navigation module
      >
        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Link to="">
                <img
                  src="../../../image-1.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Link to="">
                <img
                  src="../../../image-2.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Link to="">
                <img
                  src="../../../image-2.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Link to="">
                <img
                  src="../../../image-3.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </CardFooter>
          </Card>
        </SwiperSlide>

           <SwiperSlide>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>
                <Button variant="link">Sign Up</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Link to="">
                <img
                  src="../../../image-3.jpg"
                  alt="Slide 1"
                  className="w-full h-auto"
                />
              </Link>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
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
