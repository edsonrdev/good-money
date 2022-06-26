import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salário mensal</td>
            <td className="deposit">R$ 1.212,00</td>
            <td>Trabalho</td>
            <td>05/07/2022</td>
          </tr>
          <tr>
            <td>Parcela 22/30</td>
            <td className="withdraw">R$ -82,11</td>
            <td>Financiamento Provi</td>
            <td>10/07/2022</td>
          </tr>
          <tr>
            <td>Atel 07/2022</td>
            <td className="withdraw">R$ -100,00</td>
            <td>Internet</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};