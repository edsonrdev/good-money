import { useState } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [typeTransaction, setTypeTransaction] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" min="0" step="0.01" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setTypeTransaction("deposit")}
            isActive={typeTransaction === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" /> Entradas
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setTypeTransaction("withdraw")}
            isActive={typeTransaction === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saídas" /> Saídas
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
