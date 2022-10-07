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
