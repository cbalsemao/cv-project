const SRC_PATH = 'invasor-zim-picture.jpg';

const Photo = () => {
  return (
    <img
      src={SRC_PATH}
      alt="Avatar"
      style={{
        height: '200px',
        width: '100px',
        border: '10px solid black',
      }}
    />
  );
};

export default Photo;
