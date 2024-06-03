import ClipLoader from 'react-Spinners/ClipLoader';
const override = {
    display : 'block',
    margin: '100px auto'
}
const Spinner = ({ loading }) => {
  return (
    <ClipLoader 
    color='#4338ca'
    loading={ loading }
    cssOverrride={override}
    size={150}
    />
  );
};

export default Spinner;