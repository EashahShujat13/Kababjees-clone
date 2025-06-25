
import logo from '../assets/icons/kababjeeslogo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ⬅️ removed Navigation

import 'swiper/css';
import 'swiper/css/pagination';

function Reviews() {
  return (
    <div className="relative w-full px-4 py-10 text-center text-white">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src={logo}
          alt="Logo"
          className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 object-contain"
        />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full max-w-3xl mx-auto"
      >
        <SwiperSlide>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 uppercase mb-6">
              Fatima Effendi
            </h1>
            <p className="text-3xl font-medium leading-relaxed md:leading-[2.2rem] px-4">
              <i className="fas fa-quote-left mr-2 text-amber-400"></i>
              In terms of pricing, Kebabjees can be a bit on the expensive side compared to local eateries,
              but considering the quality of food and service, it is often worth it.
              <i className="fas fa-quote-right ml-2 text-amber-400"></i>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 uppercase mb-6">
              Eva Zu Beck
            </h1>
            <p className="text-3xl font-medium leading-relaxed md:leading-[2.2rem] px-4">
              <i className="fas fa-quote-left mr-2 text-amber-400"></i>
              The ambiance of the restaurant is also pleasant, making it a suitable place to enjoy a meal with family or friends.
              The service quality is generally good, although during busy times, there might be some waiting involved.
              <i className="fas fa-quote-right ml-2 text-amber-400"></i>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="custom-swiper-pagination mt-6 flex justify-center"></div>

      {/* Custom Styles */}
      <style jsx="true">{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          border-radius: 9999px;
          background-color: #ccc;
          opacity: 0.6;
          transition: background-color 0.3s, transform 0.3s;
        }

        .custom-bullet-active {
          background-color: #f59e0b !important; /* Tailwind amber-500 */
          opacity: 1;
          transform: scale(1.2);
        }

        .swiper-pagination-bullet:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}

export default Reviews;
