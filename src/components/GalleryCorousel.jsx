
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/gallPIC/pic23.jpg';
import img2 from '../assets/gallPIC/7.jpg';
import img3 from '../assets/gallPIC/5.jpg';
import img4 from '../assets/gallPIC/4.jpg';
import img5 from '../assets/gallPIC/8.jpg';

const images = [img1, img2, img3, img4, img5];

function CorouselAuto() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#1C1C1C] text-center px-4 py-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#E3DAC9] font-serif mb-6 uppercase tracking-widest">
        Gallery
      </h2>
      <div className="w-40 h-1 bg-[#CCA43B] mx-auto mb-12 rounded"></div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        spaceBetween={40} // More space between slides
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1.2, spaceBetween: 30 },
          768: { slidesPerView: 1.5, spaceBetween: 40 },
          1024: { slidesPerView: 2.2, spaceBetween: 50 }, // Adjusted for better fit
        }}
        className="w-full max-w-7xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[400px] mx-auto p-2 bg-white/10 border border-[#E3DAC9] shadow-lg rounded-xl transition-transform hover:scale-105 duration-300">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Styles */}
      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #E3DAC9 !important;
          scale: 1.2;
        }
      `}</style>
    </div>
  );
}

export default CorouselAuto;
