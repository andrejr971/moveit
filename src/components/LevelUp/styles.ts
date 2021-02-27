import styled from 'styled-components'

interface OverlayProps {
  isLevelUpModal: boolean
}

export const Overlay = styled.div<OverlayProps>`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${props => (props.isLevelUpModal ? 'flex' : 'none')};

  /* display: flex; */
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
  text-align: center;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/assets/img/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.5rem;
    color: var(--title);
  }

  p {
    font-size: 1.5rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: 0;
    z-index: 3;
    padding: 1rem;
    font-size: 0;

    svg {
      font-size: 1.25rem;
    }
  }
`
