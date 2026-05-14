import React from "react";
import useFetch from "./useFetch";
import SearchBar from "./SearchBar";
import ProductGallery from "./ProductGallery";
import useLocalStorage from "../../ch3/src/useLocalStorage";
import ThemeContext from "./ThemeContext";
import ThemeBox from "./ThemeBox";
import Header from "./Header";
import Select from "./Select";

const App = () => {
  //Informações da API - vem do useFetch
  const { data, loading, error, request } = useFetch();
  //estado para ativar a busca
  const [busca, setBusca] = React.useState("");
  //Referencia para o foco do Input
  const inputRef = React.useRef();
  //variavel que salva os favoritos no LocalStorage
  const [favoritos, setFavoritos] = useLocalStorage("Favoritos", []);
  //variavel que 'guarda' a aba atual para mostrar os resultados da busca ou da aba de favoritos
  const [abaAtual, setAbaAtual] = React.useState("busca");
  //variavel que guarda dos dados filtrados dos tipos de produto no filtro do select
  const [selectedType, setSelectedType] = React.useState("");
  //Filtra os produtos da API para trazer uma lista dos tipos de produto que não sejam nulos ou falsy

  const listaBase = abaAtual === "busca" ? data || [] : favoritos;
  const tipoProduto = [
    ...new Set(listaBase?.map((tp) => tp.product_type)),
  ].filter(Boolean);
  //Filtra a lista pela marca e pelo tipo de produto a primeira constante deixa a marca em minusculo para evitar erros a depender do que o usuário digitar
  const exibirLista = listaBase.filter((produto) => {
    const juntaMarca = produto.brand
      .toLowerCase()
      .includes(busca.toLowerCase());
    //a constante junta tipo seleciona o tipo - se não tivr o que mostrar o tipo selecionado é um select vazio, caso tenha ele puxa os tipos do objeto da API
    const juntaTipo =
      selectedType === "" || produto.product_type === selectedType;
    //retorna os tipos de produto da marca buscada
    return juntaMarca && juntaTipo;
  });

  //Função para formatar o texto do select e tirar os _ e deixar as letras maiúsculas
  function formataTextoSelect(texto) {
    return texto
      .replace("_", " ")
      .replace(/\b\w/g, (letra) => letra.toUpperCase());
  }

  //função que salva favoritos no localStorage
  function salvarFavorito(prodFavoritado) {
    //confere se o id do produto ja está na lista de favoritos
    const estaSalvo = favoritos.some((salvo) => salvo.id === prodFavoritado.id);
    //se estiver salvo ele tira da lista, se não estiver ele salva
    if (estaSalvo) {
      const listaNova = favoritos.filter(
        (item) => item.id !== prodFavoritado.id,
      );
      setFavoritos(listaNova);
    } else {
      setFavoritos((favoritos) => [...favoritos, prodFavoritado]);
    }
  }

  //função para fazer o fetch baseando na busca da marca escolhida
  function buscarMarca(e) {
    e.preventDefault();
    const marca = busca.toLowerCase();
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${marca}`;
    request(url);
    clearInput();
  }

  //limpa o input de busca e retorna o foco
  function clearInput() {
    setBusca("");
    inputRef.current.focus();
  }

  //Efeito para trazer o foco para o input assim que a página carrega, assim como colocar um title dinâmico.
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
    //Provider, tudo o que está dentro me dá o contexto
    <ThemeBox>      
      <Header abaAtual={abaAtual} setAbaAtual={setAbaAtual} />
      <SearchBar
        valor={busca}
        aoMudar={setBusca}
        aoBuscar={buscarMarca}
        meuRef={inputRef}
      />

      <Select
        tipo={selectedType}
        aoMudar={setSelectedType}
        tipoProduto={tipoProduto}
        aoSelecionar={formataTextoSelect}
      />

      <ProductGallery
        data={exibirLista}
        dadosApi={data}
        abaAtual={abaAtual}
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
