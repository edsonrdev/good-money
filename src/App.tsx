import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsTable } from "./components/TransactionsTable";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <TransactionsTable />
    </>
  );
};
