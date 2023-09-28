import { Grid } from 'react-loader-spinner';
import { StyledOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <StyledOverlay>
      <Grid
        height="120"
        width="120"
        color="#00BFFF"
        ariaLabel="grid-loading"
        wrapperStyle={{}}
        wrapperClass="grid-loading"
        visible={true}
      />
    </StyledOverlay>
  );
};

export default Loader;
