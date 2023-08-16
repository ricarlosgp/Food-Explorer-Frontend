import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SectionSabores = styled.section`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  display: flex;
  justify-content: end;

  width: 100%;
  height: 120px;

  position: relative;

  .wrapper-img {
    position: absolute;
    left: -30px;
    top: -36px;

    width: 200px;

    img {
      width: 100%;
    }
  }

  .wrapper-description {
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 2rem;

    > div {
      width: 180px;

      h1 {
        font-size: 16px;
        line-height: 25px;
        font-weight: 600;

        margin-bottom: 4px;
      }

      p {
        font-size: 11px;
        line-height: 17px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
  }

  @media (min-width: 650px) {
    height: 200px;

    .wrapper-img {
      left: -40px;
      top: -34px;

      width: 300px;
    }

    .wrapper-description {
      z-index: 1;
      margin-right: 20px;

      > div {
        width: 350px;

        h1 {
          font-size: 35px;
          margin-bottom: 18px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }

  @media (min-width: 800px) {
    margin-top: 226px;
    height: 260px;

    .wrapper-img {
      left: -40px;
      top: -91px;

      width: 450px;
    }

    .wrapper-description {
      z-index: 1;
      margin-right: 20px;

      > div {
        width: 60rem;
        height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: 5rem;
          margin-bottom: 18px;
        }

        p {
          margin-top: 1rem;
          font-size: 2.5rem;
        }
      }
    }
  }

  @media (min-height: 1280px) {
    .wrapper-description {
      > div {
        width: 100%;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`
export const Main = styled.div`
  min-width: 100%;
  margin: 16.5rem 0 5rem;
  padding: 0 2.4rem;

  h2 {
    font-size: 1.8rem;
    margin: 2.4rem 0;
  }

  @media (min-width: 800px) {
    margin-top: 0;
    padding: 0 12rem;

    h2 {
      font-size: 3.2rem;
    }
  }

  @media (min-height: 1280px) {
    padding: 0 5rem;
  }
`
