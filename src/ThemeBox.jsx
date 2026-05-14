import React from "react";
import ThemeContext from "./ThemeContext";

   const temas = {
      soft: {
        nome: "Soft",
        primaryColor: "#fdf6e7",
        secondaryColor: "#f4a39d",
        button: "#f4b16e",
      },
      glam: {
        nome: "Glam",
        primaryColor: "#3a223f",
        secondaryColor: "#f6eff6",
        button: "#b858bf",
      },
    };
const ThemeBox = ({ children }) => {
  const [tema, setTema] = React.useState("soft");

  function trocaTema() {
    setTema((temaAtual) => (temaAtual === "soft" ? "glam" : "soft"));
  }

  React.useEffect(() => {
    document.body.style.backgroundColor = temas[tema].primaryColor;
  }, [tema]);

  return (
    <ThemeContext.Provider
      value={{ tema: temas[tema], trocaTema, temaNome: tema }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeBox;
