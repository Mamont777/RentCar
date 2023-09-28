import { useEffect, useState } from 'react';
import { getUnsplashPhotos } from '../../shared/api';
import Container from '../Container';
import Title from '../Title';

const Destinations = () => {
  const [unsplashPhotos, setUnsplashPhotos] = useState([]);

  useEffect(() => {
    getUnsplashPhotos()
      .then(data => {
        return setUnsplashPhotos(data);
      })
      .catch(error => console.error('Ошибка при загрузке фотографий:', error));
  }, []);

  return (
    <section className="mb-4">
      <Container className="mx-auto max-w-[1400px] px-4 py-16 text-center">
        <Title className="text-center text-2xl">
          Explore Ukraine, Your Way
        </Title>
        <ul className="mb-8 grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
          {unsplashPhotos.map(({ urls, alt_description }, idx) => (
            <li
              key={idx}
              className={`${
                idx === 0
                  ? 'col-span-2 row-span-2 h-full w-full rounded-2xl object-cover shadow-2xl md:col-span-3'
                  : 'h-full w-full rounded-2xl object-cover'
              }`}
            >
              <img
                src={urls?.regular || urls?.full}
                alt={alt_description}
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Destinations;
