const SRC_PATH = 'resume-photo.jpg';

const Photo = () => {
  return (
    <img
      src={SRC_PATH}
      alt="Avatar"
      style={{
        height: '200px',
        width: '170px',
        border: '10px solid black',
      }}
    />
  );
};

export default Photo;
