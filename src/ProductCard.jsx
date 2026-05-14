import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";

const ProductCard = ({ dataItem, estaSalvo, onFave }) => {
  const {tema} = React.useContext(ThemeContext);

  return (
    <div
      key={dataItem.id}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "16px",
        borderRadius: "5px",
        backgroundColor: tema.secondaryColor,
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        style={{ margin: "10px auto", alignContent: "center" }}
        src={dataItem.image_link}
        alt={dataItem.name}
      />

      <ul
        style={{
          listStyle: "none",
          gap: "12px",
          fontFamily: "sans-serif",
          padding: "12px",
          color: tema.primaryColor,
        }}
      >
        {" "}
        <li>{dataItem.name}</li>{" "}
        <li style={{ marginTop: "12px" }}>
          R$ {dataItem.price ? dataItem.price.replace(".", ",") : "0,00"}
        </li>
        <ul
          style={{
            listStyle: "none",
            gap: "12px",
            fontFamily: "sans-serif",
            padding: "12px",
            display: "flex",
          }}
        >
          {dataItem.product_colors.map((colorObj, index) => {
            const chaveUnica = `${dataItem.id}-${index}`
            return(
              <li key={chaveUnica}>
                <span
                  title={colorObj.colour_name || 'Cor sem nome'}
                  style={{
                    backgroundColor: colorObj.hex_value,
                    display: "inline-block",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                  }}
                ></span>
              </li>
            );
          })}
        </ul>
      </ul>
      <button
        onClick={() => onFave(dataItem)}
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "3px",
          backgroundColor: "transparent",
          fontSize: "20px",
          cursor: "pointer",
          color: tema.button,
        }}
      >
        {!estaSalvo ? (
          <i className="bi bi-heart"></i>
        ) : (
          <i className="bi bi-heart-fill"></i>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
