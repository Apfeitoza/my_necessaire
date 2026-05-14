import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const SearchBar = ({valor, aoMudar, aoBuscar, meuRef}) => { 
  const { tema, trocaTema } = React.useContext(ThemeContext);
  return (
    <div style={{display:'grid',gridTemplateColumns:'4fr 1fr',margin:'0 auto', width:'80%'}}>
      <input
      style={{border:`1px solid ${tema.secondaryColor}`, padding:'8px 16px', borderRight:'none'}}
        type="text"
        value={valor}     
        ref={meuRef}
        onChange={({ target }) => aoMudar(target.value)}
      />
    
      <button style={{border:'none', backgroundColor: tema.button, color:'white', padding:'9px 16px' }} onClick={aoBuscar}>
        Buscar
      </button>
    </div>
  
  );
};

export default SearchBar;
