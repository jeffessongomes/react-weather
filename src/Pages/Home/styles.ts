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

  div + div {
    background: rgba(0, 0, 0, 0.4);
    width: 550px;
    height: 100vh;
  }
`;
