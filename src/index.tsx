import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer } from "miragejs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Compare Distribuidora (CLT)",
          amount: 1212.0,
          type: "deposit",
          category: "Salário",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Parcela 22/30",
          amount: 82.11,
          type: "withdraw",
          category: "Rocketseat",
          createdAt: new Date(),
        },
        {
          id: 3,
          title: "Atel Junho 2022",
          amount: 99.9,
          type: "withdraw",
          category: "Internet",
          createdAt: new Date(),
        },
        {
          id: 4,
          title: "Freelancer (PJ)",
          amount: 2420.0,
          type: "deposit",
          category: "Salário",
          createdAt: new Date(),
        },
        {
          id: 5,
          title: "Digio",
          amount: 60.62,
          type: "withdraw",
          category: "Cartão de Crédito",
          createdAt: new Date(),
        },
        {
          id: 6,
          title: "Will Bank",
          amount: 300.0,
          type: "withdraw",
          category: "Cartão de Crédito",
          createdAt: new Date(),
        },
        {
          id: 7,
          title: "Celpe Junho 2022",
          amount: 137.42,
          type: "withdraw",
          category: "Luz",
          createdAt: new Date(),
        },
        {
          id: 8,
          title: "Penha",
          amount: 49.5,
          type: "withdraw",
          category: "Cosméticos",
          createdAt: new Date(),
        },
        {
          id: 9,
          title: "Magdiel Parcela 3/6",
          amount: 250.0,
          type: "withdraw",
          category: "Compra do Celular",
          createdAt: new Date(),
        },
      ];
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
