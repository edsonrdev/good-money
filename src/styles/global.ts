import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root {
      --background: #f0f2f5;
      --red: #e52e4d;
      --green: #33cc95;
      --blue: #5429cc;
      --blue-light: #6933ff;
      --text-title: #363f5f;
      --text-body: #969cb3;
      --shape: #fff;
      --background-input: #e7e9ee;
      --border-input: #d7d7d7;
   }

   html {
      @media (max-width: 1000px) {
         font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
         font-size: 87.5%; // 14px
      }
   }

   body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
   }

   body, input, select, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
   }

   strong, h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
   }

   button {
      cursor: pointer;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }

   .deposit {
      color: var(--green) !important;
   }

   .withdraw {
      color: var(--red) !important;
   }

   .react-modal-overlay {
      background: rgba(0,0,0,0.6);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
   }

   .react-modal-content {
      width: 100%;
      max-width: 450px;
      background: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
   }

   .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;

      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
         filter: brightness(0.75);
      }
   }
`;
