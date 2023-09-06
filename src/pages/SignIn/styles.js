import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  height: 100vh;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  .wrapper-logo {
    padding: 160px 0 70px;

    display: flex;
    justify-content: center;

    img {
      width: 270px;
    }
  }

  .wrapper-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    label {
      display: flex;
      flex-direction: column;

      width: 316px;
      font-size: 1.6rem;

      input {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${({ theme }) => theme.COLORS.WHITE_100};

        border: none;
        height: 48px;

        margin-top: 8px;
        border-radius: 5px;
        padding-left: 14px;
        font-size: 1.6rem;
      }
    }

    >button {
      background-color: ${({ theme }) => theme.COLORS.RED_900};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      width: 316px;
      height: 48px;
      font-size: 1.6rem;
    }
    >button:hover {
      background: ${({ theme }) => theme.COLORS.RED_1000};
      transition: background .5s ease;
    }

    >a {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      text-decoration: none;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 800px) {
    display: flex;

    .wrapper-logo {
      width: 50%;
      padding: 0 0 70px;

      img {
        width: 324px;
      }
    }

    .wrapper-inputs {
      width: 50%;
      justify-content: center;

      h1 {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE_900};
      }
    }
  }
`
import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  height: 100vh;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  .wrapper-logo {
    padding: 160px 0 70px;

    display: flex;
    justify-content: center;

    img {
      width: 270px;
    }
  }

  .wrapper-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    label {
      display: flex;
      flex-direction: column;

      width: 316px;
      font-size: 1.6rem;

      input {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        color: ${({ theme }) => theme.COLORS.WHITE_100};

        border: none;
        height: 48px;

        margin-top: 8px;
        border-radius: 5px;
        padding-left: 14px;
        font-size: 1.6rem;
      }
    }

    >button {
      background-color: ${({ theme }) => theme.COLORS.RED_900};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      width: 316px;
      height: 48px;
      font-size: 1.6rem;
    }
    >button:hover {
      background: ${({ theme }) => theme.COLORS.RED_1000};
      transition: background .5s ease;
    }

    >a {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      text-decoration: none;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 800px) {
    display: flex;

    .wrapper-logo {
      width: 50%;
      padding: 0 0 70px;

      img {
        width: 324px;
      }
    }

    .wrapper-inputs {
      width: 50%;
      justify-content: center;

      h1 {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE_900};
      }
    }
  }
`
