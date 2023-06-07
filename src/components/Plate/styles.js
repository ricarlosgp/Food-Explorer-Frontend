import styled from 'styled-components'

export const Container = styled.div`
  height: 29.2rem;
  width: 21rem;

  padding: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  position: relative;
  .wrapper-heart-svg {
    position: absolute;
    top: 1rem;
    right: 1rem;

    font-size: 3.4rem;
  }

  .wrapper-img {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 8.8rem;
    }
  }

  .wrapper-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    > div {
      margin-top: 1.2rem;
      display: flex;
      align-items: center;
      gap: 5px;

      h3 {
        font-size: 1.4rem;
      }
    }

    span {
      margin-bottom: 2rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PRICE_$};
    }
  }

  .wrapper-control {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }

    span {
      font-size: 1.6rem;
    }

    .wrapper-buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .wrapper-button {
      width: 100%;

      button {
        background: ${({ theme }) => theme.COLORS.RED_1000};
        color: ${({ theme }) => theme.COLORS.WHITE_500};

        border: none;

        width: 100%;

        padding: 10px;
        border-radius: 5px;
      }
    }
  }

  @media (min-width: 800px) {
    width: 30.4rem;
    height: 46.2rem;

    .wrapper-img {
      img {
        width: 17.6rem;
      }
    }

    .wrapper-description {
      > div {
        h3 {
          font-size: 2.4rem;
        }
        svg {
          font-size: 2rem;
        }
      }

      p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        text-align: center;
      }

      span {
        margin: 1.5rem 0 2rem;
        font-size: 3.2rem;
      }
    }

    .wrapper-control {
      flex-direction: row;
    }
  }
`
