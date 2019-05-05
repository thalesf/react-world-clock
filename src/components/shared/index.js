import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.color || "white"};
  padding: 2%;
`;

export default Container;
