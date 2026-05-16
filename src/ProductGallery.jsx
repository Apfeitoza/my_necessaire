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
  dadosApi,  
}) => {
  const { tema } = React.useContext(ThemeContext);
  if (!data) return null;

  return (
    <div>
      {" "}
      {loading && (
        <div className="status-card">  
        <i class="bi bi-three-dots"></i>
        <p className="status-text" data-theme={tema}>
          Carregando produtos...
        </p>
        </div>
      )}
      {error && (
        <div className="status-card">        
        <i class="erro bi bi-exclamation-octagon"></i>
        <p className="status-text" data-theme={tema}>
          Ocorreu um erro: {error}
        </p>
        </div>
      )}
      {dadosApi && dadosApi.length === 0 && !loading && (
         <div className="status-card">  
         <i class="bi bi-heartbreak"></i>
        <p className="status-text" data-theme={tema}>
          Não conseguimos encontrar essa marca, tente novamente!
        </p>
        </div>
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
