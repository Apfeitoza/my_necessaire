import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const Select = ({ tipo, aoMudar, aoSelecionar, tipoProduto }) => {
  const { tema } = React.useContext(ThemeContext);
  
  return (
    <div className="select-container">
      <select
        name="tipo-produto"
        className="seleciona-produto"
        value={tipo}
        data-theme={tema}
        onChange={({ target }) => aoMudar(target.value)}
      >
        <option key={"todos"} value="">
          Todos os Produtos
        </option>
        {tipoProduto.map((tipo, index) => {
          const chaveProd = `${tipo}-${index}`;
          return (
            <option key={chaveProd} value={tipo}>
              {aoSelecionar(tipo)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
