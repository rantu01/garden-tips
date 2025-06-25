import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesData = [
  {
    id: 1,
    title: 'Spring Garden Festival 2024',
    description: 'Join us for a celebration of spring with garden tours, workshops, and live music.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80',
    buttonText: 'Learn More',
    buttonLink: '/',
  },
  {
    id: 2,
    title: 'Urban Balcony Gardening Workshop',
    description: 'Discover the joy of gardening in small spaces with our expert-led balcony gardening workshop.',
    imageUrl: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
    buttonText: 'Register',
    buttonLink: '/register',
  },
  {
    id: 3,
    title: 'Composting Basics Seminar',
    description: 'Learn how to compost effectively and sustainably to enrich your garden soil.',
    imageUrl: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=',
    buttonText: 'Sign in',
    buttonLink: '/login',
  }
];

const BannerSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-8 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {slidesData.map(({ id, title, description, imageUrl, buttonText, buttonLink }) => (
          <SwiperSlide key={id}>
            <div
              className="relative h-72 sm:h-96 md:h-[450px] flex items-center justify-center text-center"
              style={{
                backgroundImage: `url("${imageUrl}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay with dark mode support */}
              <div className="bg-black/20 dark:bg-black/40 backdrop-blur-md p-6 sm:p-12 rounded-2xl max-w-3xl text-white dark:text-gray-100">
                <h2 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow">
                  <Typewriter
                    words={[title]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </h2>
                <p className="mb-6 text-lg sm:text-xl text-gray-100 dark:text-gray-300">{description}</p>
                <a
                  href={buttonLink}
                  className="inline-block bg-primary hover:bg-primary-focus transition-colors text-white font-semibold py-3 px-6 rounded shadow"
                  aria-label={`${buttonText} for ${title}`}
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
