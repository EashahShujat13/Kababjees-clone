
import img1 from '../assets/locationimg/highway.jpeg';
import img2 from '../assets/locationimg/dodarya.jpeg';
import img3 from '../assets/locationimg/shaheed.jpeg';
import img4 from '../assets/locationimg/hyderabad.jpeg';

const locations = [
  {
    name: 'Kababjees Do Darya',
    image: img2,
    link: 'https://www.google.com/maps/place/Kababjees+Restaurant+-+Do+Darya/@24.7568555,67.0958814,2353m/data=!3m1!1e3!4m6!3m5!1s0x3eb323588318f8a3:0xd333c7e5ed0ed511!8m2!3d24.7568555!4d67.0958814!16s%2Fg%2F11c5_r_qr1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Kababjees Highway',
    image: img1,
    link: 'https://www.google.com/maps/place/Kababjees+Restaurant+%26+Bakers+-+Super+Highway/@24.9716467,67.1171713,4698m/data=!3m1!1e3!4m6!3m5!1s0x3eb347d912bed263:0x5804ef4b4d9236f0!8m2!3d24.9746875!4d67.1183125!16s%2Fg%2F11rrr9tscm!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Kababjees Shaheed-e-Millat',
    image: img3,
    link: 'https://www.google.com/maps/place/Kababjees+Shaheed-e-Millat+Branch/@24.9722551,67.0597861,18792m/data=!3m1!1e3!4m6!3m5!1s0x3eb33eee739a7109:0xf89aaedb6373b164!8m2!3d24.8830845!4d67.060157!16s%2Fg%2F11c1mj5xv8!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Kababjees MM Alam Lahore',
    image: img4,
    link: 'https://www.google.com/maps/place/Kababjees+Restaurant/@31.4637784,74.43318,35m/data=!3m1!1e3!4m6!3m5!1s0x391909005e72754f:0xd71ff9348cd0757a!8m2!3d31.4636712!4d74.4332034!16s%2Fg%2F11lp17lk02!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D',
  },
];

function MainLocation() {
  return (
    <section id='location' className="bg-[#1C1C1C] py-28 px-8 text-center ">
      <h2 className="text-4xl font-bold uppercase text-white mb-10">
        Our Locations
      </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
  {locations.map((loc, index) => (
    <div
      key={index}
      className="flex flex-col w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    >
      <a href={loc.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {/* Image */}
        <img
          src={loc.image}
          alt={loc.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Name box - smaller height, centered text */}
        <div className="h-16 bg-amber-500 flex items-center justify-center text-white font-semibold text-lg px-2 text-center">
          {loc.name}
        </div>
      </a>
    </div>
  ))}
</div>

    </section>
  );
}

export default MainLocation;
