import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";
import Select from "./Select";

const SearchBar = ({ valor, aoMudar, aoBuscar, meuRef }) => {
  const { tema } = React.useContext(ThemeContext);
  return (
    <form className="search-container" action="search" onSubmit={aoBuscar}>
      <input
        placeholder="Buscar por marca"
        id="barra-busca"
        className="search-bar"
        data-theme={tema}
        type="text"
        value={valor}
        ref={meuRef}
        onChange={({ target }) => aoMudar(target.value)}
      />
   
      <button className="search-button" type="submit">
        Buscar
      </button>

      
    </form>


  );
};

export default SearchBar;
