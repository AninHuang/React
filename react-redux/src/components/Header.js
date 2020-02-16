import styled from 'styled-components';

export default styled.div`
  background-color: #282c34;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      opacity: 0.85;
    }
  }
`;
