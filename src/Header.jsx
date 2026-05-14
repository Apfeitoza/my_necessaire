import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const Header = ({ abaAtual, setAbaAtual }) => {
  const { tema, trocaTema } = React.useContext(ThemeContext);
  return (
    <header>
      <div style={{ display: "flex", justifyContent:'space-between', alignItems:'center', margin:'20px 50px'}}>
        <h1
          style={{
            color: tema.secondaryColor,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          MakeUp Api
        </h1>
        <div>
          {tema.nome === "Glam" ? (
            <button style={{border:'none', backgroundColor:'transparent', padding: '20px', color: tema.button}} onClick={trocaTema}>
              <i style={{fontSize:'20px'}} className="bi bi-moon"></i>
            </button>
          ) : (
            <button style={{border:'none', backgroundColor:'transparent', padding: '20px', color: tema.button}} onClick={trocaTema}>
              <i style={{fontSize:'20px'}} className="bi bi-sun"></i>
            </button>
          )}
        </div>
      </div>

      <nav style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "12px",
            fontFamily: "sans-serif",
          }}
        >
          <li>
            <button
              style={{
                backgroundColor: abaAtual === "busca" ? tema.secondaryColor : tema.button,
                color: tema.primaryColor,
                padding: " 8px 16px",
                borderRadius: "3px",
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => setAbaAtual("busca")}
            >
              Produtos
            </button>
          </li>

          <li>
            <button
              style={{
                backgroundColor: abaAtual !== "busca" ? tema.secondaryColor : tema.button,
                color: tema.primaryColor,
                padding: " 8px 16px",
                borderRadius: "3px",
                cursor: "pointer",
                textDecoration: "none",
                border: "none",
              }}
              onClick={() => setAbaAtual("favoritos")}
            >
              Favoritos
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
