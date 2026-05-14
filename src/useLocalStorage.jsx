import React from "react";

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    //se tiver algo pra salvar, faz o parse da array senão deixa o valor inicial, serve pra gente puxar o valor salvo
    return local ? JSON.parse(local) : inicial;
  });
  //para salvar um valor no localStorage
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;
