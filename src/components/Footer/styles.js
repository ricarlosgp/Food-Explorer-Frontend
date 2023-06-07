import styled from 'styled-components'

export const Container = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  @media (min-width: 800px) {
    justify-content: space-between;
    padding: 0 110px;
  }
`
