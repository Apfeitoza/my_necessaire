import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const Header = ({ abaAtual, setAbaAtual }) => {
  const { tema, trocaTema } = React.useContext(ThemeContext);
  return (
    <header>
      <div className="nav-container">
        <h1 className="title" data-theme={tema}>
          My <span>Make</span> Necessaire
        </h1>
        <nav data-theme={tema} className="navigation">
          <ul className="button-list" style={{}}>
            <li>
              <button
                className={abaAtual === "busca" ? "ativo" : ""}
                onClick={() => setAbaAtual("busca")}
              >
                Produtos
              </button>
            </li>

            <li>
              <button
                className={abaAtual !== "busca" ? "ativo" : ""}
                onClick={() => setAbaAtual("favoritos")}
              >
                Favoritos
              </button>
            </li>
          </ul>
        </nav>
        <div className="tema-container">
          {
            //Ternario para exibição do botão de troca de tema
            tema === "glam" ? (
              <button
                className="btn-tema"
                data-theme={tema}
                onClick={trocaTema}
              >
                <i className="bi bi-moon"></i>
              </button>
            ) : (
              <button
                className="btn-tema"
                data-theme={tema}
                onClick={trocaTema}
              >
                <i className="bi bi-sun"></i>
              </button>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
