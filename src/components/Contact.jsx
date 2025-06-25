

const ContactPage = () => {
  return (
    <div id='contact' className=" min-h-screen text-black py-98 px-4 sm:px-6 md:px-12 flex flex-col justify-end">

      {/* Grid with responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-start">
        
        {/* --- About Us --- */}
        <section className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">About Us</h2>
          <p className="text-sm sm:text-base leading-relaxed text-white">
            We welcome you to explore our<br />
            taste of the world, in continental <br />
            and chinese delights and that's <br />
            even before you get to the variety<br />
            and excellence, of our barbecue<br />
            grill.
          </p>
        </section>

        {/* --- Contact Us --- */}
        <section className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">Contact Us</h2>
          <p className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer">
            Email: kababjeez@example.com
          </p>
          <p className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer">
            Phone: +92 300 1234567
          </p>
        </section>

        {/* --- Work Time --- */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">Work Time</h2>
          <p className="text-sm sm:text-base text-white">
            Monday – Sunday<br />
            5 PM – 1 AM
          </p>
          <button className="bg-[#CCA43B] hover:bg-[#a0522d] text-black font-semibold py-2 px-4 rounded-xl transition-all">
          <a href="https://order.kababjees.com/">Order Online </a>
          </button>
        </section>

        {/* --- Locations --- */}
        <section className="space-y-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#CCA43B]">Locations</h2>
         
          <p className="text-sm sm:text-base text-white"><a className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer" href="https://www.google.com/maps/place/Kababjees+Restaurant+-+Do+Darya/@24.7568555,67.0958814,2353m/data=!3m1!1e3!4m6!3m5!1s0x3eb323588318f8a3:0xd333c7e5ed0ed511!8m2!3d24.7568555!4d67.0958814!16s%2Fg%2F11c5_r_qr1!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D">Do Darya</a></p>
          <p className="text-sm sm:text-base text-white"><a className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer" href="https://www.google.com/maps/place/Kababjees+Shaheed-e-Millat+Branch/@24.9722551,67.0597861,18792m/data=!3m1!1e3!4m6!3m5!1s0x3eb33eee739a7109:0xf89aaedb6373b164!8m2!3d24.8830845!4d67.060157!16s%2Fg%2F11c1mj5xv8!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D">Shaheed-e-Millat</a></p>
          <p className="text-sm sm:text-base text-white"><a className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer" href="https://www.google.com/maps/place/Kababjees+Restaurant+%26+Bakers+-+Super+Highway/@24.9716467,67.1171713,4698m/data=!3m1!1e3!4m6!3m5!1s0x3eb347d912bed263:0x5804ef4b4d9236f0!8m2!3d24.9746875!4d67.1183125!16s%2Fg%2F11rrr9tscm!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D">Highway</a></p>
          <p className="text-sm sm:text-base text-white"><a className="text-sm sm:text-base text-white hover:text-[#CCA43B] transition cursor-pointer" href="https://www.google.com/maps/place/Kababjees+Restaurant/@31.4637784,74.43318,35m/data=!3m1!1e3!4m6!3m5!1s0x391909005e72754f:0xd71ff9348cd0757a!8m2!3d31.4636712!4d74.4332034!16s%2Fg%2F11lp17lk02!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4wIKXMDSoASAFQAw%3D%3D">Lahore</a></p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
