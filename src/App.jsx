import React from "react";
import useFetch from "./useFetch";
import SearchBar from "./SearchBar";
import ProductGallery from "./ProductGallery";
import useLocalStorage from "../../ch3/src/useLocalStorage";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";
import Header from "./Header";

const App = () => {
  const { data, loading, error, request } = useFetch();
  const [busca, setBusca] = React.useState("");
  const inputRef = React.useRef();
  const [favoritos, setFavoritos] = useLocalStorage("Favoritos", []);
  const [abaAtual, setAbaAtual] = React.useState("busca");
  const exibirLista = abaAtual === "busca" ? data : favoritos;

  function salvarFavorito(prodFavoritado) {
    const estaSalvo = favoritos.some((salvo) => salvo.id === prodFavoritado.id);

    if (estaSalvo) {
      const listaNova = favoritos.filter(
        (item) => item.id !== prodFavoritado.id,
      );
      setFavoritos(listaNova);
    } else {
      setFavoritos((favoritos) => [...favoritos, prodFavoritado]);
    }
  }

  function buscarMarca(e) {
    e.preventDefault();
    const marca = busca.toLowerCase();
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${marca}`;
    request(url);
    clearInput();
  }

  function clearInput() {
    setBusca("");
    inputRef.current.focus();
  }

  React.useEffect(() => {
    const itemsNecessaire = favoritos.length;
    if (abaAtual === "busca") {
      inputRef.current.focus();
      document.title = "Makeup API - Monte sua necessaire de produtos Glam";
    } else {
      document.title = `Minha necessaire: ${itemsNecessaire} itens`;
    }
  }, [favoritos, abaAtual]);

  return (
    <ThemeBox>
      <Header abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
      <SearchBar
        valor={busca}
        aoMudar={setBusca}
        aoBuscar={buscarMarca}
        meuRef={inputRef}
      />
      <ProductGallery
        data={exibirLista}
        onFave={salvarFavorito}
        favoritos={favoritos}
        loading={loading}
        error={error}
        exibirLista={exibirLista}
      />
    </ThemeBox>
  );
};

export default App;
