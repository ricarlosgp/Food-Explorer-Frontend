import styled from 'styled-components'

export const Container = styled.section`
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  height: 114px;
  width: 100%;

  padding: 0 3rem;

  display: flex;
  align-items: center;
  position: fixed;

  z-index: 2;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  .paperList {
    position: relative;

    .length {
      background: ${({ theme }) => theme.COLORS.RED_900};
      position: absolute;
      top: -4px;
      right: -8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      text-align: center;
      font-weight: bold;
      font-size: 1.8rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
    width: 100%;

    .logoImg {
      width: 18rem;
    }

    .menuCheckbox {
      position: relative;
      display: flex;
      justify-content: center;
      z-index: 2;

      input {
        width: 22px;
        height: 22px;

        position: absolute;
        opacity: 0;
      }

      .closeMenu {
        img {
          width: 18px;
          height: 18px;
        }

        span {
          font-size: 20px;

          position: absolute;
          left: 30px;
          bottom: 1px;
        }
      }
    }

    .wrapper-container-input {
      width: 85%;
      height: 50px;

      position: absolute;
      top: 110px;

      .wrapper-input {
        width: 100%;
        z-index: 2;

        position: relative;

        > img {
          position: absolute;
          top: 8px;
          left: 10px;
        }

        input {
          background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
          border: none;

          border-radius: 5px;

          padding: 12px 0px 12px 50px;
          width: 100%;
          height: 100%;
          color: white;
        }
      }
    }
  }

  .wrapper-button {
    background: ${({ theme }) => theme.COLORS.RED_900};
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 1.6rem;

    border: none;

    min-width: 16rem;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border-radius: 5px;
    cursor: pointer;
  }

  .wrapper-button:hover {
    background: ${({ theme }) => theme.COLORS.RED_1000};
    transition: background .5s ease;
  }

  .sidebar {
    width: 100%;
    height: 100%;

    overflow: hidden;

    position: absolute;
    top: 0;
    margin-left: -28px;

    padding: 180px 30px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    .bgFix {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

      width: 100%;
      height: 80px;

      margin-left: -28px;

      top: 0;
      position: absolute;
    }

    nav {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINE};
      padding: 10px 0;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;

        font-size: 2rem;
      }

      ul li button {
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color:  ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
  }

  @media (min-width: 800px) {
    justify-content: center;
    padding: 0 110px;

    .wrapper {
      width: 100%;

      .wrapper-container-input {
        position: static;

        .wrapper-input {
          height: 100%;
          position: relative;

          > img {
            position: absolute;
            top: 12px;
            left: 10px;
          }

          input {
            border: none;

            padding: 12px 0px 12px 50px;
            width: 100%;
            height: 100%;
            color: white;
          }
        }
      }

      .logOut {
        width: 32px;
      }
    }
  }

  @media (max-width: 320px) {
    padding: 0;

    .paperList {
      .length {
        right: -2px;
      }
    }
  }

  @media (min-height: 1280px) {
    padding: 0 5rem;
  }
`
