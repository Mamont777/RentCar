import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useToggle } from '../../shared/hooks';
import { selectFavorites } from '../../redux/cars/carsSelectors';
import {
  removeFromFavorites,
  setToFavorites,
} from '../../redux/cars/carsSlice';
import Button from '../Button';
import ThumbImage from '../ThumbImage';
import { DefaultCar } from '../../assets/images';
import Title from '../Title';
import CardInfoBlock from './CardInfoBlock';
import { getCarData, getLocationData } from '../../shared/utils';
import { Modal, ModalCardDetail } from '../Modal';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const { open, close, isOpen } = useToggle(false);
  const favorites = useSelector(selectFavorites);
  const { id, year, make, model, rentalPrice, img, address } = car;
  const carData = getCarData(car);
  const locationData = getLocationData(address, car);
  const isFavorite = favorites?.some(favCar => favCar.id === id);

  const handleToggleFavorite = () => {
    return isFavorite
      ? dispatch(removeFromFavorites(car))
      : dispatch(setToFavorites(car));
  };

  return (
    <>
      <li className="card flex-auto">
        <Button
          type="button"
          onClick={handleToggleFavorite}
          iconURL="#icon-heart"
          araiaLabel="heart icon"
          className={`heart ${isFavorite ? 'favorite' : ''}`}
        />
        <ThumbImage
          className="card-image"
          src={img ? img : DefaultCar}
          alt={`${make} ${model}`}
          width="274"
          height="426"
          loading="lazy"
        />
        <Title>
          <span className="truncate hover:text-clip dark:text-white">
            {make}
            <span className="title-accent ml-1">{model}</span>, {year}
          </span>
          <span className="dark:text-white">{rentalPrice}</span>
        </Title>
        <CardInfoBlock locationData={locationData} carData={carData} />
        <Button label="learn more" className="card-big-button" onClick={open} />
        {isOpen && (
          <Modal isOpen={isOpen} onClose={close}>
            <ModalCardDetail car={car} />
          </Modal>
        )}
      </li>
    </>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
  fav: PropTypes.bool,
};

export default CarItem;
