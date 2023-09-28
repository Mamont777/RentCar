import PropTypes from 'prop-types';
import { useState } from 'react';
import { filterCarsForDisplay } from '../../shared/utils';
import Button from '../Button';
import CarItem from './CarItem';

const CarsList = ({ adverts }) => {
  const COUNT_CARS = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCar = currentPage * COUNT_CARS;

  const displayedCars = filterCarsForDisplay(adverts, indexOfLastCar);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <ul className="cards-list">
        {displayedCars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
      {adverts?.length >= displayedCars.length && (
        <Button
          onClick={handleLoadMore}
          className="button-load"
          label="Load more"
        />
      )}
    </>
  );
};

CarsList.propTypes = {
  adverts: PropTypes.array,
};

export default CarsList;
