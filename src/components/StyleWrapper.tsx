import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  .container {
    height: 500px;
    max-width: 900px !important;
    overflow: auto;
  }
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    thead {
      background-color: #ccc;
      position: sticky;
      top: 0;
      .th {
        padding: 5px;
        text-align: center;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .tbody {
      .td {
        padding: 5px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

export default StyledWrapper;
