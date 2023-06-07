import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED_900};

  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE_900};

  width: 316px;
  padding: 12px 0;

  font-size: 14px;
  border-radius: 5px;
`
