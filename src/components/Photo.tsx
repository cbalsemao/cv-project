const SRC_PATH = 'resume-photo.jpg';

const Photo = () => {
  return (
    <img
      src={SRC_PATH}
      alt="Avatar"
      style={{
        height: '160px',
        width: '150px',
      }}
    />
  );
};

export default Photo;
