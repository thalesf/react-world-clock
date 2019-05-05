import styled from "styled-components";

const ClockWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  table {
    tr:nth-child(odd) {
      background: #e4e8ed;
    }
    td:first-child {
      width: 10px;
    }
    th {
      padding: 10px;
    }
    td {
      padding: 7px;
    }
  }
`;

export default ClockWrapper;
