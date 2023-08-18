import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  max-width: ${({ isnew }) => (isnew ? '150px' : '120px')};

  color: ${({ theme }) => theme.COLORS.WHITE_900};

  background-color: ${({ theme, isnew }) =>
    isnew === 'true' ? 'none' : `${theme.COLORS.BACKGROUND_INGREDIENT}`};

  padding-right: 16px;
  border-radius: 8px;
  border: ${({ theme, isnew }) =>
    isnew === 'true' ? `1px dashed ${theme.COLORS.WHITE_900}` : 'none'};

  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }
  > input {
    height: 30px;
    min-width: ${({ isnew }) => (isnew ? '120px' : '100%')};

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE_900};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_900};
    }
  }
`
