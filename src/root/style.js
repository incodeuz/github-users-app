import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: ${({ dark }) => (dark ? "#151c2f" : "white")};
  background-color: ${({ dark }) => (dark ? "white" : "#151c2f")};
`;

export { Container };
