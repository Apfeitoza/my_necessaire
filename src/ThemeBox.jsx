import React from "react";
import ThemeContext from "./ThemeContext";

 const ThemeBox = ({ children }) => {
  const [tema, setTema] = React.useState("soft");

  function trocaTema() {
    setTema((temaAtual) => (temaAtual === "soft" ? "glam" : "soft"));
  }

  //ao inves de usarmos o document.body.style para trocar a cor pelo efeito, só utilizamos o efeito para incluir o data-theme
  React.useEffect(() => {
    document.body.setAttribute('data-theme', `${tema}`);
  }, [tema]);

  return (
    <ThemeContext.Provider
      value={{ tema: tema, trocaTema, temaNome: tema }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeBox;
