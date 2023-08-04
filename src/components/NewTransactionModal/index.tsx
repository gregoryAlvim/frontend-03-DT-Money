import * as S from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <S.CloseButton>
          <X size={24}/>
        </S.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionType>
            <S.TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24}/> 
              Entrada
            </S.TransactionTypeButton>

            <S.TransactionTypeButton value="expense" variant="expense">
              <ArrowCircleDown size={24}/> 
              Saída
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button type="submit">
            Nova transação
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  );
}