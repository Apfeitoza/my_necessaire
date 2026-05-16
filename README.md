# 💄 MakeUp API - Minha Necessaire Glam

Este é um projeto de gerenciamento e busca de produtos de maquiagem que consome a [Makeup API](http://makeup-api.herokuapp.com/).
Foi desenvolvido como parte dos meus estudos práticos de React, unificando o consumo de dados assíncronos e persistência local (LocalStorage), oferecendo suporte a múltiplos temas.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído do zero utilizando as práticas de desenvolvimento em ecossistema React:

- **React (Vite):** Ambiente de desenvolvimento rápido e otimizado para Single Page Applications (SPAs).
- **Context API:** Gerenciamento de estado global para controle e alternância de temas do sistema.
- **Hooks Customizados (`useFetch` e `useLocalStorage`):** Isolamento de lógica para requisições HTTP seguras (com gerenciamento de loading e erros) e persistência de dados no navegador.
- **Hooks Nativos (`useState`, `useEffect`, `useRef`, `useCallback`):** Controle fino do ciclo de vida dos componentes, gerenciamento de estados dinâmicos e manipulação de foco no DOM.
- **CSS (Variáveis CSS & Data-Attributes):** Arquitetura CSS baseada em tokens (`data-theme`) para suporte nativo a temas dinâmicos (_Soft_ e _Glam_) e layouts baseados em CSS Grid responsivo com `minmax`.
- **Bootstrap Icons:** Biblioteca de ícones integrada para melhorar a experiência visual da interface.

---

## 🧠 Desafios e Aprendizados (Arquitetura de Sistemas)

Desenvolver este projeto trouxe desafios técnicos reais que me ajudaram a consolidar conceitos fundamentais:

1.  **Lógica de Estado Derivado e Sincronização:** Um dos maiores desafios foi unificar a fonte de dados. Em vez de duplicar funções, criei uma `listaBase` inteligente que detecta se o usuário está na aba de buscas ou de favoritos. Isso permitiu que os filtros de ordenação e tipo de produto (usando o objeto `Set` para evitar duplicatas) funcionassem de forma integrada em ambas as telas.
2.  **Ciclo de Vida e Timing Assíncrono:** Lidar com estados iniciais nulos da API exigiu a implementação de travas lógicas e renderizações condicionais (`&&`). Isso garantiu que mensagens de "Marca não encontrada" ou "Necessaire vazia" só aparecessem nos momentos exatos, evitando falsos erros na inicialização do app.
3.  **Resiliência da Interface (Tratamento de Falhas):** APIs públicas podem conter dados inconsistentes ou links de imagens quebrados. Para contornar isso, implementei o tratamento do evento `onError` diretamente nas tags de imagem, substituindo links falhos por um placeholder local e prevenindo loops infinitos com a anulação do gatilho (`target.onerror = null`).
4.  **Versionamento e Fluxo Git:** Vivenciei o fluxo completo de ramificação no Git, resolvendo conflitos de merge entre branches locais e remotas e utilizando o `git stash` como cofre temporário para garantir a integridade do código de estilos durante a sincronização da lógica.

---

## 💻 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1. Clone este repositório para o seu computador:
   ````bash
   git clone [https://github.com/SeuUsuario/my_necessaire.git](https://github.com/SeuUsuario/my_necessaire.git) ```
   ````
2. Acesse a pasta do projeto:

````bash
cd my_necessaire
````
3.	Instale todas as dependências necessárias:
````bash
npm install
````

4. Inicie o servidor de desenvolvimento local:

````bash
npm run dev
````

5. Abra o navegador no endereço indicado pelo terminal (geralmente http://localhost:5173) para ver o projeto rodando.

---

## 🌐 Deploy
O projeto está configurado para deploy contínuo através da Vercel conectado diretamente à branch main deste repositório. Qualquer alteração ou melhoria enviada via git push atualiza automaticamente a versão de produção.

[Acesse o deploy aqui!](https://my-necessaire-rm6oyxhvy-apfeitozas-projects.vercel.app/)