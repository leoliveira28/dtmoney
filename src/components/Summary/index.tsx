import IncomeImg from '../../assets/entradas.svg';
import TotalImg from '../../assets/total.png';

import OutcomeImg from '../../assets/saidas.svg';

import { Container } from "./styles";

export function Summary() {
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
            <div>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>

            </Container>
    )
}