import React from "react";
import ProductCard from "./ProductCard";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const ProductGallery = ({
  data,
  favoritos,
  onFave,
  loading,
  error,
  exibirLista,
}) => {
  const { tema } = React.useContext(ThemeContext);
  if (!data) return null;

  return (
    <div>
      {" "}
      {loading && (
        <p className="status-text" data-theme={tema}>
          Carregando produtos...
        </p>
      )}
      {error && (
        <p className="status-text" data-theme={tema}>
          Ocorreu um erro: {error}
        </p>
      )}
      {data && data.length === 0 && !loading && (
        <p className="status-text" data-theme={tema}>
          Não conseguimos encontrar essa marca, tente novamente
        </p>
      )}
      {exibirLista && exibirLista.length > 0 ? (
        <div className="gallery-container">
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
        <p className="status-text" data-theme={tema}>
          Sua necessaire está vazia, salve algum produto antes!
        </p>
      )}
    </div>
  );
};

export default ProductGallery;
