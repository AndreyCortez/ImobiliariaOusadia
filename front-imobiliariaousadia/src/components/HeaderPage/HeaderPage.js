import React from 'react';
import Image1 from '../../assets/test/houseFront1.jpg';


const HeaderPage = ({title }) => {
  const containerStyle = {
    position: 'relative',
    height: '120px',
    width: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '24px',
  };

  return (
    <div style={containerStyle}>
      <img src={Image1} alt="Imagem" style={imageStyle} />
      <div style={overlayStyle}>{title}</div>
    </div>
  );
};

export default HeaderPage;
