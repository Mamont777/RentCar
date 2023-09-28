import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useUniquePropValues } from '../../shared/hooks';
import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';
import { setFilter } from '../../redux/cars/carsSlice';

const RadioFilter = ({ open }) => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const favoritesCars = useSelector(selectFavorites);

  const uniqueBrands = useUniquePropValues(favoritesCars, 'rentalCompany');

  const handleBrandChange = rentalCompany => {
    if (!filter || filter.rentalCompany !== null) {
      dispatch(setFilter({ rentalCompany }));
    } else if (filter.make === rentalCompany) {
      dispatch(setFilter({ ...filter, rentalCompany: '' }));
    } else {
      dispatch(setFilter({ ...filter, rentalCompany }));
    }
  };

  const showAllBrands =
    (window.innerWidth >= 768 && uniqueBrands.length < 2) || open;

  return (
    <ul className="ml-10 mt-10 flex flex-wrap items-center gap-10">
      {uniqueBrands.map((rentalCompany, index) => (
        <li
          key={index}
          className={`relative flex items-center justify-center gap-3 ${
            !showAllBrands && index > 0 ? 'hidden' : ''
          }`}
        >
          <input
            type="radio"
            id={rentalCompany}
            name="make"
            value={rentalCompany}
            checked={filter?.rentalCompany === rentalCompany}
            className="radio"
            onChange={() => handleBrandChange(rentalCompany)}
          />
          <label
            htmlFor={rentalCompany}
            className="inline-block pl-[0.15rem] text-main-text hover:cursor-pointer"
          >
            {rentalCompany}
          </label>
        </li>
      ))}
    </ul>
  );
};

RadioFilter.propTypes = {
  open: PropTypes.bool,
};

export default RadioFilter;
