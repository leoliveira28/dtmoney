import  React, { useState } from "react";
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
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

      

      <NewTransactionModal
      isOpen={isNewTransacrionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}/>
      
      <GlobalStyle />
    </>
  );
}


