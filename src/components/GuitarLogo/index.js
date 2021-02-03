// import React from 'react';
// import styled from 'styled-components';
// import acousticGuitar from '../../assets/acoustic-guitar.svg';

// function Guitar() {
//   return (
//     <img src={acousticGuitar} alt="Guitar Logo" />
//   );
// }

// const GuitarLogo = styled(Guitar)`
//   width: 100px;
//   height: 100px;
// `;

// export default GuitarLogo;

import styled from 'styled-components';
import acousticGuitar from '../../assets/acoustic-guitar.svg';

const GuitarLogo = styled.img`
  src: ${acousticGuitar};
  /* background-position: center;
  background-size: cover; */
  width: 100px;
  height: 100px;
`;

export default GuitarLogo;
