import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer} from './styles';
import CloseImg from '../../assets/vector.svg';
import React, { FormEvent, useState } from 'react';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
   const [type, setType] = useState('deposit');
   const [title, setTitle] = useState('');
   const [value, setValue] = useState(0);
   const [category, setCategory] = useState('');
   function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        console.log({
            title,
            value, 
            category,
            type,
        });
   }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
                <button type="button" className="react-modal-close">
                    <img src={CloseImg} onClick={onRequestClose}  alt="Fechar Modal"></img>
                </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Titulo"></input>
                <input
                    type="number"
                    placeholder="Valor"
                    onChange={event => setValue(Number(event.target.value))}
                    value={value}></input>
                    <TransactionTypeContainer>
                    <RadioBox
                    isActive={type === "deposit"} type="button" 
                    onClick={() => {setType('deposit'); }}
                    activeColor="green"
                    >
                      <span>Entradas</span>  <img src={incomeImg} alt="Entradas"></img>
                    </RadioBox>

                    <RadioBox 
                    isActive={type === "withdraw"}
                    type="button" onClick={() => {setType('withdraw'); }}
                    activeColor="red">
                       <span>Saidas</span> <img src={outcomeImg} alt="Saidas"></img>
                    </RadioBox>
                    </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    ></input>

                <button type="submit">Cadastrar</button>    




            </Container>
        </Modal>
    )
}