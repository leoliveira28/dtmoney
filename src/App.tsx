import  { useState } from "react";
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransacrionModalOpen, setIsNewTransacrionModalOpen] = useState(false);
    function handleOpenNewTransactionModal() {
        setIsNewTransacrionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransacrionModalOpen(false);
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal isOpen={isNewTransacrionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}>
            <h2>Cadastrar nova transação</h2>
        </Modal>



      <GlobalStyle />
    </>
  );
}


