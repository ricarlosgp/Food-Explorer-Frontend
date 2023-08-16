import styled from 'styled-components'

export const Container = styled.div`
  max-height: 29.2rem;
  width: 21rem;

  padding: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  position: relative;

  a, svg {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }

  .wrapper-heartOrPencil-svg {
    position: absolute;
    top: 1rem;
    right: 1rem;

    button {
      background: none;
      border: none;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  .wrapper-img {
    height: 10rem;
    width: 10rem;

    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;

      border-radius: 100%;
    }
  }

  .wrapper-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    height: 7rem;

    > div {
      display: flex;
      align-items: center;
      gap: .5rem;

      text-align: center;

      h3 {
        font-size: 1.4rem;
      }
    }

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PRICE_$};
    }
  }

  .wrapper-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;

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
    min-height: 46.2rem;

    .wrapper-img {
      height: 17.6rem;
      width: 17.6rem;
    }

    .wrapper-description {
      height: 22rem;
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

      svg {
        width: 2.4;
        height: 2.4;
      }

      
      span {
        font-size: 2.4rem;
      }

    }
  }
`
