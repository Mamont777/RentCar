import PropTypes from 'prop-types';
import {
  getFuelEngineData,
  getFullCarData,
  parseMileage,
  parsePrice,
  parseRentalConditions,
  renderItems,
} from '../../shared/utils';
import Separator from '../Separator';
import ThumbImage from '../ThumbImage';
import Title from '../Title';
import AccessoriesBlock from '../Accessories/AccessoriesBlock';
import RentCondBlock from '../Rental Conditions/RentCondBlock';

const ModalCardDetail = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
  } = car;

  const carData = getFuelEngineData(car);
  const locatioData = getFullCarData(address, car);
  const rentConditions = parseRentalConditions(rentalConditions);
  const mile = parseMileage(mileage);
  const price = parsePrice(rentalPrice);

  return (
    <>
      <ThumbImage
        src={img}
        alt={`${make} ${model}`}
        width="461"
        height="248"
        className="modal-car"
        blockClass="w-[461px] h-[248px]"
        loading="lazy"
      />
      <Title className="modal-title">
        {make} <span className="modal-accent-title">{model}</span>, {year}
      </Title>
      <div className="mb-[14px] gap-[4px]">
        <ul className="modal-description mb-[4px] flex items-center justify-start">
          {renderItems(locatioData, <Separator />)}
        </ul>
        <ul className="modal-description flex items-center justify-start">
          {renderItems(carData, <Separator />)}
        </ul>
      </div>
      <div className="modal-accent-descr dark:text-white">{description}</div>
      <AccessoriesBlock
        title="Accessories and functionalities"
        accessories={accessories}
        functionalities={functionalities}
      />
      <RentCondBlock
        title="Rental Conditions"
        rentConditions={rentConditions}
        mile={mile}
        price={price}
      />

      <a href="tel: +380961111111" className="modal-btn-link">
        Rental car
      </a>
    </>
  );
};

ModalCardDetail.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.array.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }),
};

export default ModalCardDetail;
