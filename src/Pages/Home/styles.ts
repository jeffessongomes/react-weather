import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 120px 0;
    margin-left: 120px;

    h3 {
      font-weight: normal;
      font-size: 1.6em;
    }

    div {
      display: flex;
      align-items: center;

      strong {
        font-size: 9em;
        padding: 0;
        margin: 0;
      }

      div {
        display: flex;
        flex-direction: column;

        strong {
          font-size: 3.3em;
        }

        p {
          font-size: 1.14em;
          margin: 0;
          color: #d7dbdd;
        }
      }

      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 1.14em;

        margin-left: 33px;
      }
    }
  }
`;

export const Navbar = styled.div`
  width: 650px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  backdrop-filter: blur(15px);

  padding: 0 70px 0 70px !important;

  & > div {
    input {
      margin-top: 58px;

      background: transparent;
      outline: none;
      border: none;
      border-bottom: 1px solid #b3b6b7;
      font-weight: normal;
      color: #b3b6b7;

      padding: 10px 0;
      font-size: 1.4em;
      width: 75%;

      &::placeholder {
        color: #b3b6b7;
      }
    }

    button {
      position: absolute;
      right: 0;
      top: 0;

      height: 105px;
      width: 105px;
      border-radius: 0;
      background: #d35400;
      outline: none;
      border: none;
    }
  }

  div + div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      padding: 50px 0;
      font-size: 1.4em;
    }

    ul {
      width: 100%;

      li {
        list-style: none;
        display: flex;
        justify-content: space-between;

        & + li {
          padding-top: 40px;
        }
      }
    }
  }
`;
