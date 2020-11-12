import styled from "styled-components";

const Container = styled.div`
  section::after {
    content: "_";
    font-size: 74px;
    font-weight: 500;
    margin: 2em 0;
  }
  width: 1200px;
  max-width: 1200px !important;
  margin: 100px auto;
  .Grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2em;
  }
  .Item {
    background-color: green;
    height: fit-content;
  }
`;

export { Container };