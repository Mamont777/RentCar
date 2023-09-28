import { Link } from 'react-router-dom';
import MainTitle from '../MainTitle';

const Hero = () => {
  return (
    <section className="hero mt-[-8rem] w-screen">
      <div className="max-container absolute left-0 top-[4rem] flex h-full w-full items-start justify-start flex-col p-20 text-white wide:top[8rem] wide:mt[2rem]">
        <MainTitle className="mb-6 max-w-[950px] p-3 font-bold drop-shadow-2xl md:text-8xl">
          Unlock the <span className="gradient">Adventure</span> on Ukrainian
          Roads
        </MainTitle>
        <p className="mb-4 max-w-[600px] py-2 text-[1.1rem] drop-shadow-2xl">
          Embrace the thrill of exploring Ukraine at your own leisure through
          our car rental app. Uncover stunning landscapes, lively cities, and
          well-kept secrets effortlessly. Your journey commences right here.
        </p>
        <Link
          to="/catalog"
          className="small-button cursor-pointer px-2 text-center"
        >
          Reserve now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
