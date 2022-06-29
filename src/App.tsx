import { useState } from "react";

import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsTable } from "./components/TransactionsTable";

import Modal from "react-modal";
Modal.setAppElement("#root");

export const App = () => {
  /*
    -------------------------------------------------------------
    PROPS NECESSÁRIAS PRO MODAL
    -------------------------------------------------------------
    isOpen -> aberto / fechado
    onRequestClose -> o que acontecer nos eventos de fechar modal
    -------------------------------------------------------------
  */

  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  // callbacks para abrir / fechar modal de transações
  const openNewTransactionModal = () => setNewTransactionModalOpen(true);
  const closeNewTransactionModal = () => setNewTransactionModalOpen(false);
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={openNewTransactionModal} />
      <Dashboard />
      <TransactionsTable />

      <Modal
        isOpen={newTransactionModalOpen}
        onRequestClose={closeNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
};
