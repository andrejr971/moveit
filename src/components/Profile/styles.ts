import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  align-items: center;

  img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin-right: 23px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: var(--title);
    }

    p {
      font-size: 16px;
      line-height: 19px;
      margin-top: 8px;

      display: flex;
      align-items: center;

      img {
        width: 14px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
`
