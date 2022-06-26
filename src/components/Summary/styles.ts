import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    box-shadow: 0 0.2rem 0 0.1rem rgba(0, 0, 0, 0.01);

    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.15rem;
      font-weight: 300;

      img {
        width: 1.35rem;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;
