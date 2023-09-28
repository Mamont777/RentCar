import { useEffect, useState } from 'react';
import {
  PiArrowFatLineLeftFill,
  PiArrowFatLineRightBold,
} from 'react-icons/pi';
import { RxDotFilled } from 'react-icons/rx';
import { useSlide } from '../../shared/hooks';
import { getUnsplashPhotos } from '../../shared/api';

const Slider = () => {
  const [unsplashPhotos, setUnsplashPhotos] = useState([]);

  const slideCount = unsplashPhotos.length;

  const { currentIndex, prevSlide, nextSlide, moveSlide } = useSlide(
    0,
    slideCount
  );

  useEffect(() => {
    getUnsplashPhotos()
      .then(data => {
        setUnsplashPhotos(data);
      })
      .catch(error => console.error('Ошибка при загрузке фотографий:', error));
  }, []);

  return (
    <section className="group relative m-auto mb-8 mt-20 h-[580px] w-full max-w-[1140px] px-4 py-16">
      <div
        className="h-full w-full rounded-2xl bg-cover bg-center shadow-2xl transition duration-500 ease-linear"
        style={{
          backgroundImage: `url(${unsplashPhotos[currentIndex]?.urls?.regular})`,
        }}
      ></div>
      <div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl text-white transition duration-200 ease-in-out group-hover:bg-black/20">
        <PiArrowFatLineLeftFill onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl text-white transition duration-200 ease-in-out group-hover:bg-black/20">
        <PiArrowFatLineRightBold onClick={nextSlide} size={30} />
      </div>

      <ul className=" top-4 flex justify-center py-2 transition duration-200 ease-in-out">
        {unsplashPhotos.map((slide, slideIndex) => (
          <li
            className="cursor-pointer text-2xl transition duration-200 ease-in-out"
            key={slideIndex}
            onClick={() => moveSlide(slideIndex)}
          >
            <RxDotFilled />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Slider;
