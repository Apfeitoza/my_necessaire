import React from "react";
import ProductCard from "./ProductCard";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const ProductGallery = ({ data, favoritos, onFave, loading, error, exibirLista}) => {
  const { tema} = React.useContext(ThemeContext);
  if (!data) return null;

  return (
    <div>
      {" "}
      {loading && (
        <p
          style={{
            color: tema.secondaryColor,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Carregando...
        </p>
      )}
      {error && (
        <p
          style={{
            color: tema.secondaryColor,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Ocorreu um erro: {error}
        </p>
      )}
      {data && data.length === 0 && !loading && (
        <p
          style={{
            color: tema.secondaryColor,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Não conseguimos encontrar essa marca, tente novamente
        </p>
      )}
      {exibirLista && exibirLista.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
            margin: "10px auto",
          }}
        >
          {data.map((item) => {
            const favoritado = favoritos.some((salvo) => salvo.id === item.id);
            return (
              <ProductCard
                key={item.id}
                dataItem={item}
                estaSalvo={favoritado}
                onFave={onFave}            
               />
            );
          })}
        </div>
      ) : (
        <p
          style={{
            color: tema.secondaryColor,
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          Sua necessaire está vazia, salve algum produto antes!
        </p>
      )}
    </div>
  );
};

export default ProductGallery;
