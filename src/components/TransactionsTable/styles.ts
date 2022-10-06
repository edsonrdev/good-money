import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: auto;
  margin-bottom: 60px;
  /* margin-top: 4rem; */

  table {
    width: 100%;
    border-spacing: 0 0.25rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }

    tbody tr {
      box-shadow: 0 0.15rem 0 0.05rem rgba(0, 0, 0, 0.02);
      overflow: hidden;
      transition: filter 0.15s ease-in-out;

      &:hover {
        filter: brightness(0.97);
      }
    }
  }
`;
