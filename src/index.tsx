import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Compare Distribuidora (CLT)",
          amount: 1212.0,
          type: "deposit",
          category: "Salário",
          createdAt: new Date("2022-10-06 10:54:17"),
        },
        {
          id: 2,
          title: "Parcela 26/30",
          amount: 82.11,
          type: "withdraw",
          category: "Rocketseat",
          createdAt: new Date("2022-10-10 23:59:59"),
        },
        {
          id: 3,
          title: "Atel Junho 2022",
          amount: 99.99,
          type: "withdraw",
          category: "Internet",
          createdAt: new Date("2022-10-25 23:59:59"),
        },
        {
          id: 4,
          title: "Freelancer (PJ)",
          amount: 2420.0,
          type: "deposit",
          category: "Salário",
          createdAt: new Date("2022-10-24 11:24:35"),
        },
        {
          id: 5,
          title: "Digio",
          amount: 60.62,
          type: "withdraw",
          category: "Cartão de Crédito",
          createdAt: new Date("2022-10-10 23:59:59"),
        },
        {
          id: 6,
          title: "Will Bank",
          amount: 500.0,
          type: "withdraw",
          category: "Cartão de Crédito",
          createdAt: new Date("2022-10-10 23:59:59"),
        },
        {
          id: 7,
          title: "Celpe 10/2022",
          amount: 116.48,
          type: "withdraw",
          category: "Luz",
          createdAt: new Date("2022-09-24 23:59:59"),
        },
        {
          id: 8,
          title: "Penha 2/4",
          amount: 49.5,
          type: "withdraw",
          category: "Cosméticos",
          createdAt: new Date("2022-10-15 23:59:59"),
        },
        {
          id: 9,
          title: "Magdiel Parcela 3/6",
          amount: 250.0,
          type: "withdraw",
          category: "Compra do Celular",
          createdAt: new Date("2022-10-30 23:59:59"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
