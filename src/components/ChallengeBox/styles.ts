import styled, { css } from 'styled-components'

interface ContentProps {
  hasActiveChallenge: boolean
}

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;

  background: var(--white);
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1.5rem 2rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  strong {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    max-width: 70%;

    img {
      width: 32px;
      height: auto;
      margin-right: 12px;
    }
  }

  ${({ hasActiveChallenge }) =>
    hasActiveChallenge &&
    css`
      height: 100%;



      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */

      header {
        color: var(--blue);
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid var(--gray-line);
      }

      main {
        flex: 1;
        margin: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 140px;
          height: 112px;
        }

        strong {
          font-weight: 600;
          font-size: 2rem;
          color: var(--title);
          margin: 1.5rem 0 1rem;
        }

        p {
          line-height: 1.5;
        }
      }

      footer {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }
  `}
`

export const Button = styled.button`
  background: #4cd62b;
  border-radius: 5px;
  height: 3rem;
  border: 0;
  font-size: 1.2rem;
  color: var(--white);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  &.fail {
    background: var(--red);
  }

  &:hover {
    filter: brightness(0.8);
  }
`
