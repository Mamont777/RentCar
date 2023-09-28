import { Link } from 'react-router-dom';
import Title from '../Title';

const Banner = () => {
  return (
    <section className="banner-section w-full p-4">
      <div className="max-container">
        <div className="banner relative z-[4] w-full lg:w-2/5">
          <Title className="banner-header mb-4 mt-10 text-left font-montserrat text-4xl font-bold dark:text-white  max-sm:text-3xl">
            Unbeatable{' '}
            <span className="font-semibold text-accent-color drop-shadow-[0_0.8px_0.8px_rgba(0,0,20,1)]">
              {' '}
              Luxury Car
            </span>{' '}
            Offers from Around the Globe
          </Title>
          <p className="banner-text">
            RentCars offers premium car rentals, featuring prestigious brands
            such as Ferrari and Lamborghini.
          </p>
          <div className="banner-links-wrap">
            <Link to="/catalog" className="small-button shadow-2xl">
              Rent Now
            </Link>
          </div>
          <div className="flex items-center justify-start">
            <span className="banner-features-text flex items-center justify-start max-md:flex-col">
              <strong className="banner-features-strong">200+</strong> Luxury
              Cars
            </span>
            <span className="banner-features-text flex items-center justify-start max-md:flex-col">
              <strong className="banner-features-strong">#1</strong>Best Deal
              Car
            </span>
          </div>
        </div>
      </div>
      <div className="banner-img"></div>
    </section>
  );
};
export default Banner;
