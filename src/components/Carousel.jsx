
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/bankimages/img1.jpg';
import img2 from '../assets/bankimages/img2.jpeg';
import img3 from '../assets/bankimages/img3.jpeg';
import img4 from '../assets/bankimages/img4.jpeg';
import BgImage from '../assets/bankimages/img0.jpg';
const images = [img1, img2, img3, img4];

function CorouselAuto() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage})`, 
       
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl text-[#E3DAC9] font-serif mb-6 uppercase tracking-widest drop-shadow-md">
        Bank Discount
      </h2>
      <div className="w-40 h-1 bg-[#CCA43B] mx-auto mb-12 rounded"></div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
        spaceBetween={40}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1.2, spaceBetween: 30 },
          768: { slidesPerView: 1.5, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
        }}
        className="w-full max-w-6xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[500px] sm:h-[550px] mx-auto p-2 bg-white/10 border border-[#E3DAC9] shadow-2xl rounded-xl transition-transform hover:scale-105 duration-300">
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
