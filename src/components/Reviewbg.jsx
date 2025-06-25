
import bgImg from '../assets/reviewImgs/bgimg2.jpeg';

function Reviewbg() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 brightness-50"
      style={{ backgroundImage: `url(${bgImg})` }}
    />
  );
}

export default Reviewbg;
