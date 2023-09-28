import PropTypes from 'prop-types';
import RentCondItem from './RentCondItem';

const RentCondBlock = ({ rentConditions, mile, price, title }) => {
  return (
    <div className="mb-[24px]">
      <p className="modal-second-title dark:text-white">{title}</p>
      <ul className="modal-cond-block gap-3">
        <RentCondItem
          conditionText={rentConditions[0]}
          conditionValue={rentConditions[1]}
        />
        <RentCondItem conditionText={rentConditions[2]} />
        <RentCondItem conditionText={rentConditions[3]} />
        <RentCondItem conditionText={'Mileage: '} conditionValue={mile} />
        <RentCondItem conditionText={'Price: '} conditionValue={price} />
      </ul>
    </div>
  );
};

RentCondBlock.propTypes = {
  rentConditions: PropTypes.array.isRequired,
  mile: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RentCondBlock;
