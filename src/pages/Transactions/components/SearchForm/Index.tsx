import * as S from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />

      <button type="submit">
        <MagnifyingGlass />
        Buscar
      </button>
    </S.SearchFormContainer>
  )
}