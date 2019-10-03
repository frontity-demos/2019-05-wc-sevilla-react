import React from "react";
import { connect, Global, styled } from "frontity";
import Link from "./Link";
import List from "./List";
import Post from "./Post";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={`
          html {
            font-family: sans-serif;
          }
        `}
      />
      <Header isPostType={data.isPostType}>
        <h1>WordCamp Sevilla 💃</h1>
        <p>Estamos en {state.router.link}</p>
        {state.theme.isMenuOpen ? (
          <>
            <Button onClick={actions.theme.closeMenu}>Cerrar</Button>
            <Menu>
              <Link href="/">Inicio</Link>
              <Link href="/page/2">Inicio - página 2</Link>
              <Link href="/informacion/faq">Preguntas frecuentes</Link>
            </Menu>
          </>
        ) : (
          <Button onClick={actions.theme.openMenu}>Menú</Button>
        )}
      </Header>
      <hr />
      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
      </Main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props =>
    props.isPostType
      ? "background-color: aliceblue"
      : "background-color: mintcream"};

  h1 {
    font-size: 3em;
    text-align: center;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 16px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 16px;

  img {
    max-width: 100%;
  }
`;

const Button = styled.button`
  width: 92px;
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  color: black;
  font-weight: bold;
`;
