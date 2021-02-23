import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`
export const Section = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
  margin-top: 1.5rem;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

export const Time = styled.div`
  display: flex;
  flex-direction: column;
`

export const Challenge = styled.div``
