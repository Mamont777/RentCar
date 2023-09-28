import PropTypes from 'prop-types';

const RentCondItem = ({ conditionText, conditionValue }) => {
  return (
    <li className="modal-btn-cond dark:bg-slate-600">
      <p className="cond dark:text-white/50">{conditionText}</p>
      {conditionValue && (
        <span className="modal-accent-cond">{conditionValue}</span>
      )}
    </li>
  );
};

RentCondItem.propTypes = {
  conditionText: PropTypes.string.isRequired,
  conditionValue: PropTypes.string,
};

export default RentCondItem;
