import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: 'Rajdhani';
  color: var(--title);

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem 0;
  }

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`

export const Button = styled.button`
  background: var(--blue);
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  color: var(--white);
  font-size: 1.25rem;
  border-radius: 5px;
  font-weight: 600;

  transition: all 0.2s;

  svg {
    font-size: 1.5rem;
    margin-left: 8px;

    transition: all 0.2s;
  }

  &:hover {
    background: var(--blue-dark);

    svg {
      margin-left: 16px;
    }
  }
`
