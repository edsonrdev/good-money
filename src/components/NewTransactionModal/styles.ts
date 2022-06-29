import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--border-input);
    background: var(--background-input);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;

    transition: filter 0.25s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.85, colors[props.activeColor])
      : "transparent"};

  border-color: ${(props) =>
    props.isActive
      ? transparentize(0.6, colors[props.activeColor])
      : css`var(--border-input)`};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: border-color 0.2s;

  img {
    width: 20px;
    height: 20px;
  }
`;
