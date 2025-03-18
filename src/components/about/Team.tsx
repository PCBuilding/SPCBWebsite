"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamImages = Array(15).fill("/about-images/placeholderpic.jpg"); // 15 Placeholder images

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

          {/* Box Structure for Carousel */}
          <div className="mt-8 py-4 sm:py-5 px-8 rounded-md bg-gray-900 border border-gray-800">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={1} // Shows 1 full set of 5 images per slide
              slidesPerGroup={1} // Moves 1 full set per swipe
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 4500 }} // 4.5-second delay before swipe
              loop={false} // Stops after third slide
              className="rounded-lg"
            >
              {/* Slide 1: First 5 images */}
              <SwiperSlide>
                <div className="flex justify-center gap-4">
                  {teamImages.slice(0, 5).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Team Member ${index + 1}`}
                      className="w-full max-w-[180px] h-auto aspect-[4/4] object-cover rounded-lg"
                    />
                  ))}
                </div>
              </SwiperSlide>

              {/* Slide 2: Next 5 images */}
              <SwiperSlide>
                <div className="flex justify-center gap-4">
                  {teamImages.slice(5, 10).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Team Member ${index + 6}`}
                      className="w-full max-w-[180px] h-auto aspect-[4/4] object-cover rounded-lg"
                    />
                  ))}
                </div>
              </SwiperSlide>

              {/* Slide 3: Last 5 images */}
              <SwiperSlide>
                <div className="flex justify-center gap-4">
                  {teamImages.slice(10, 15).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Team Member ${index + 11}`}
                      className="w-full max-w-[180px] h-auto aspect-[4/4] object-cover rounded-lg"
                    />
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="grad h-32 -scale-y-[1]" />
    </div>
  );
}
