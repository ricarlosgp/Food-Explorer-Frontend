import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 100vh;

  color: ${({ theme }) => theme.COLORS.WHITE_500};

  .wrapper-1 {
    padding-top: 12rem;
  }

  .back {
    padding-left: 2rem;
    margin-top: 4rem;

    button {
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.WHITE_500};

      font-size: 2.2rem;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  
  .wrapper-img {
    display: flex;
    flex-direction: column;
    align-items: center;

    .imgWrapper {
      max-width: 180px;
      height: 180px;

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
        font-size: 2.2rem;
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

          white-space: nowrap;
          cursor: pointer;
        }

        button:hover {
          background: ${({ theme }) => theme.COLORS.RED_900};
          transition: background .5s ease;
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
      gap: 5px;

      height: 100vh;
      padding: 0 110px;

      .back {
        position: absolute;
        top: 14rem;
        left: 9rem;

        button {
          font-size: 2.4rem;
        }
      }

      .wrapper-img {
        display: flex;
        justify-content: center;
        align-items: end;

        margin-top: 0px;

        width: 50%;
        height: 100%;

        .imgWrapper {
          max-width: 400px;
          height: 400px;
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
