import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCars, selectFilter } from '../redux/cars/carsSelectors';
import { filterCars } from '../shared/utils';
import { getAllCars } from '../redux/cars/carsThunk';
import { setFilter } from '../redux/cars/carsSlice';
import Filter from '../components/Filter/Filter';
import CarsList from '../components/Cars/CarsList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filter = useSelector(selectFilter);
  const filteredCars = filterCars(cars, filter);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [dispatch]);

  return (
    <>
      <Filter cars={filteredCars} />
      {cars.length > 0 && <CarsList adverts={filteredCars} />}
    </>
  );
};

export default CatalogPage;
