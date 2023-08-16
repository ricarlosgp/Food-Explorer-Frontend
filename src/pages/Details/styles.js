import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 100vh;

  color: ${({ theme }) => theme.COLORS.WHITE_500};

  .wrapper-img {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .back {
      width: 100%;
      padding-left: 30px;
      font-size: 24px;

      display: flex;
      align-items: center;
      gap: 5px;

      cursor: pointer;
    }

    .imgWrapper {
      max-width: 250px;
      height: 250px;

      img {
        width: 100%;
        height: 100%;
        margin-bottom: 2rem;
        border-radius: 100%;
      }
    }

  }

  .wrapper-description {
    padding: 0 15px;

    height: 40vh;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-size: 2.7rem;
    }

    .text {
      max-height: 100px;
      overflow: auto;

      p {
        font-size: 1.6rem;
      }
    }

    .wrapper-tags {
      display: flex;
      justify-content: center;
      max-height: 90px;

      overflow: auto;

      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;

        li {
          background: ${({ theme }) => theme.COLORS.BACKGROUND_INGREDIENT_D};
          height: 32px;
          border-radius: 5px;

          padding: 8px;
          font-size: 1.4rem;
        }
      }
    }

    .wrapper-control {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;

      svg,
      span {
        font-size: 3.2rem;
      }

      .wrapper-button {
        button {
          background: ${({ theme }) => theme.COLORS.RED_1000};
          color: ${({ theme }) => theme.COLORS.WHITE_500};

          height: 38px;
          border: none;

          padding: 10px 24px;
          border-radius: 5px;
          font-size: 1.8rem;
        }
      }
    }
  }

  .wrapper-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  @media (min-width: 800px) {
    .wrapper-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      height: 100vh;
      padding: 0 120px;

      .wrapper-img {
        display: flex;
        justify-content: center;
        align-items: end;

        margin-top: 0px;
        padding-right: 5rem;

        width: 50%;
        height: 100%;

        .back {
          padding-left: 5rem;
        }

        img {
          max-width: 39rem;
        }
      }

      .wrapper-description {
        display: flex;
        justify-content: center;

        width: 50%;
        height: 100%;

        text-align: left;

        h1 {
          font-size: 4rem;
        }

        .text {
          max-height: 100px;
          overflow: auto;

          p {
            font-size: 2.4rem;
          }
        }

        .wrapper-tags,
        .wrapper-control {
          justify-content: left;
        }
      }
    }
  }
`
