import PropTypes from 'prop-types';
import icons from '../assets/images/icons.svg';

const Button = ({
  id,
  type,
  className,
  onClick,
  label,
  iconURL,
  araiaLabel,
  svgClass,
}) => {
  return (
    <button
      data-id={id}
      type={type}
      className={
        className
          ? `${className}`
          : 'flex h-[28px] w-[28px] items-center justify-center rounded-full border-none outline-none transition duration-200 ease-in-out active:shadow-sm'
      }
      onClick={onClick}
    >
      {label}
      {iconURL && (
        <svg
          width="18"
          height="18"
          aria-label={araiaLabel}
          className={svgClass}
        >
          <use href={icons + iconURL} />
        </svg>
      )}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  iconURL: PropTypes.string,
  araiaLabel: PropTypes.string,
  svgClass: PropTypes.string,
};

export default Button;
