"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamImages = Array(12).fill("/about-images/placeholderpic.jpg"); // 12 Placeholder images

export default function Team() {
  return (
    <div className="sm:pt-6">
      <div className="grad h-32" />
      <div className="px-6 sm:px-10 py-20">
        <div className="mx-auto max-w-7xl text-white">
          <h2 className="text-2xl sm:text-4xl">Meet Our Team</h2>
          <p className="pt-4 sm:pt-6 sm:text-lg text-balance opacity-80">
            Behind the Society of PC Building is a passionate team of officers
            who work hard to bring our community together, organize events, and
            foster a love for PC building.
          </p>

          {/* Responsive Box Structure for Carousel */}
          <div className="mt-8 py-4 sm:py-5 px-4 sm:px-8 rounded-md bg-gray-900 border border-gray-800 flex flex-col items-center">
            <div className="w-full max-w-[100%] sm:max-w-[85%] lg:max-w-[1200px]">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={5} // Reduce gap between images
                breakpoints={{
                  320: { slidesPerView: 1 }, // Mobile
                  640: { slidesPerView: 2 }, // Tablets
                  1024: { slidesPerView: 4 }, // Desktops
                }}
                slidesPerGroup={1}
                pagination={{
                  clickable: true,
                  el: ".custom-swiper-pagination",
                }} // Pagination dots now positioned below
                autoplay={{ delay: 4500 }}
                grabCursor={true}
                allowTouchMove={true}
                loop={false}
                className="rounded-lg"
              >
                {teamImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center">
                      <img
                        src={src}
                        alt={`Team Member ${index + 1}`}
                        className="w-[90%] sm:w-[95%] lg:w-[280px] h-auto aspect-[4/3] object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Pagination Dots Positioned Below */}
            <div className="custom-swiper-pagination mt-6 flex justify-center"></div>
          </div>
        </div>
      </div>
      <div className="grad h-32 -scale-y-[1]" />
    </div>
  );
}
