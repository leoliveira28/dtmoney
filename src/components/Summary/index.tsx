import IncomeImg from '../../assets/entradas.svg';
import TotalImg from '../../assets/total.png';

import OutcomeImg from '../../assets/saidas.svg';

import { Container } from "./styles";
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutcomeImg} alt="Saidas" />
                </header>
                <strong>R$ -500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>

            </Container>
    )
}