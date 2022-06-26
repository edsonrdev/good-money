import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
<<<<<<< HEAD
        <strong>R$ 1.212,00</strong>
=======
        <strong className="deposit">R$ 1212,00</strong>
>>>>>>> feat/summary-component
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
<<<<<<< HEAD
        <strong>R$ -182,11</strong>
=======
        <strong className="withdraw">R$ -1254,87</strong>
>>>>>>> feat/summary-component
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
<<<<<<< HEAD
        <strong>R$ 1.029,89</strong>
=======
        <strong className="withdraw">R$ -42,87</strong>
>>>>>>> feat/summary-component
      </div>
    </Container>
  );
};
