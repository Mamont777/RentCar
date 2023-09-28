import Hero from '../components/HomeSections/Hero';
import Banner from '../components/HomeSections/Banner';
import Destinations from '../components/HomeSections/Destinations';
import Offers from '../components/HomeSections/Offers';
import RentService from '../components/Header/RentService';
import Slider from '../components/HomeSections/Slider';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Hero />
      <Banner />
      <Destinations />
      <Offers />
      <RentService />
      <Slider />
    </div>
  );
};

export default HomePage;
