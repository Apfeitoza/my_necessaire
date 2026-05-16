import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const ProductCard = ({ dataItem, estaSalvo, onFave }) => {
  const { tema } = React.useContext(ThemeContext);

  return (
    <div className="card-container" key={dataItem.id}>
      <span className="product-tag" data-theme={tema}>
        {dataItem.product_type || "Produto"}
      </span>
      <img
        src={dataItem.image_link  || "image-alt.svg"}
        alt={dataItem.name}
        onError={({ target }) => {
          target.onerror = null; // Previne loops infinitos se o placeholder também quebrar

          target.src = "image-alt.svg";
        }}
      />

      <ul className="card-list" data-theme={tema}>
        {" "}
        <li>{dataItem.name}</li>{" "}
        <li className="product-price">
          R$ {dataItem.price ? dataItem.price.replace(".", ",") : "0,00"}
        </li>
        <ul className="color-list">
          {dataItem.product_colors.map((colorObj, index) => {
            const chaveUnica = `${dataItem.id}-${index}`;
            return (
              <li key={chaveUnica}>
                <span
                  className="product-color"
                  title={colorObj.colour_name || "Cor sem nome"}
                  style={{
                    backgroundColor: colorObj.hex_value,
                  }}
                ></span>
              </li>
            );
          })}
        </ul>
      </ul>
      <div className="cta-container">
        <button
          className="fave-button"
          data-theme={tema}
          onClick={() => onFave(dataItem)}
        >
          {!estaSalvo ? (
            <i className="bi bi-heart"></i>
          ) : (
            <i className="bi bi-heart-fill"></i>
          )}
        </button>
        <a
          className="comprar-btn"
          data-theme={tema}
          href={dataItem.website_link}
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
