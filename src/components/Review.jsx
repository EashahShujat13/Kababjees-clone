
import Reviews from './Reviews';
import Reviewbg from './Reviewbg';

function MainReview() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Reviewbg />

      {/* Foreground Content */}
      <div className="relative z-10 w-full">
        <Reviews />
      </div>
    </section>
  );
}

export default MainReview;
