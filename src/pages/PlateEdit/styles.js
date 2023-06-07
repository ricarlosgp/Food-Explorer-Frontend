import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  position: relative;

  .wrapper-header {
    position: absolute;
    top: 0;
  }

  .wrapper-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  @media ((min-height: 900px) and (max-height: 1280px)) {
    .wrapper-form {
      height: 100vh;
      width: 100%;
      padding: 15rem 1rem;
    }
  }
`

export const Form = styled.form`
  padding: 15rem 3.2rem;
  width: 100%;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    font-size: 1.6rem;

    margin-bottom: 2.4rem;

    input,
    select {
      width: 100%;
      height: 4.8rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      border: none;
      border-radius: 0.8rem;

      padding: 1.4rem 1.6rem;
    }
  }

  .wrapper-head {
    > div {
      margin-bottom: 3.4rem;
      display: flex;
      align-items: center;

      span {
        font-size: 1.6rem;
      }
    }
  }

  .wrapper-1 {
    margin-top: 2.4rem;

    span {
      display: block;
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }

    .wrapper-file {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 1rem;

      label {
        justify-content: start;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        display: flex;

        height: 45px;

        padding: 0 3.2rem;
        border-radius: 8px;

        svg {
          font-size: 2.4rem;
        }

        input[type='file'] {
          display: none;
        }
      }
    }
  }

  .wrapper-2 {
    .ingredients {
      > div {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

        display: flex;
        flex-direction: row;
        gap: 1rem;

        padding: 1.4rem;
        border-radius: 1rem;

        overflow: auto;
      }
    }

    > label {
      margin-top: 2.4rem;
    }
  }

  .wrapper-3 {
    textarea {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      padding: 1.4rem 1.6rem;

      resize: none;
      height: 17.2rem;

      border: none;
      border-radius: 0.8rem;
    }
  }

  .wrapper-button {
    button {
      background-color: ${({ theme }) => theme.COLORS.RED_1000};
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      border: none;
      width: 100%;

      padding: 1.2rem;
    }
  }

  @media (min-width: 800px) {
    padding: 15rem 12rem;

    .wrapper-1 {
      display: flex;
      gap: 3.2rem;

      .wrapper-file {
        width: 22.9rem;
      }

      label:nth-child(3) {
        max-width: 20rem;
      }

      > label:last-child {
        max-width: 36.4rem;

        select {
          width: 100%;
        }
      }
    }

    .wrapper-2 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3.2rem;

      .ingredients {
        margin-top: -3rem;
        width: 100%;

        > div {
          padding: 0.8rem;
        }
      }

      > label {
        margin-top: 0;
        max-width: 25.1rem;
      }
    }

    .wrapper-button {
      display: flex;
      justify-content: end;

      button {
        width: 17.2rem;
      }
    }
  }
`
