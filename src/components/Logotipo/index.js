import styled from 'styled-components';

const Logotipo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  max-width: 350px;
  margin: auto;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    width: 100%
  }
`;

export default Logotipo;
