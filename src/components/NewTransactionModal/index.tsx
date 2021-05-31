import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer} from './styles';
import CloseImg from '../../assets/vector.svg';
import React, { FormEvent, useState,  useContext } from 'react';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { TransactionsContext, useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const {createTransaction} = useTransactions();
   const [type, setType] = useState('deposit');
   const [title, setTitle] = useState('');
   const [amount, setAmount] = useState(0);
   const [category, setCategory] = useState('');


   async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onRequestClose();
  }

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
               <button onClick={onRequestClose} className="react-modal-close">
        <img src={CloseImg} alt="Fechar modal" />
      </button>

            <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
                    <TransactionTypeContainer>
                    <RadioBox
                    type="button"
                    onClick={() => setType("deposit")}
                    isActive={type === "deposit"}
                    activeColor="green"
                    >
                      <span>Entradas</span>  <img src={incomeImg} alt="Entradas"></img>
                    </RadioBox>

                    <RadioBox 
                      type="button"
                      onClick={() => setType("withdraw")}
                      isActive={type === "withdraw"}
                      activeColor="red">
                       <span>Saidas</span> <img src={outcomeImg} alt="Saidas"></img>
                    </RadioBox>
                    </TransactionTypeContainer>
                <input
                     placeholder="Categoria"
                     value={category}
                     onChange={(event) => setCategory(event.target.value)}/>

                <button type="submit">Cadastrar</button>    




            </Container>
        </Modal>
    )
}