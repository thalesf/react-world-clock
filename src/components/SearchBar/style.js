import styled from "styled-components";

const ListWrapper = styled.ul`
  background-color: #fff;
  position: absolute;
  margin-top: 0;

  li {
    margin-top: 0;
    list-style: none;
    font-size: 1.6rem;
    padding-top: 10px;

    a {
      text-decoration: none;
      color: #6b8097;
    }
    a:visited {
      color: #4b6584;
    }
  }
`;

export default ListWrapper;
