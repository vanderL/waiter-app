import styled from 'styled-components';


export const Container = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1216px;
  align-items: center;
  justify-content: space-between;
  display: flex;


  .page-details {
    h1 {
      font-size: 32px;
      color: #fff;
    }

    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
export const Logo = styled.img``;
