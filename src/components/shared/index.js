import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.color || "white"};
  padding: 20px;
`;

export default Container;
