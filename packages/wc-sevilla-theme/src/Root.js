import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "./Link";
import List from "./List";
import Post from "./Post";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
        styles={css`
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
            <Menu>
              <Link href="/">Inicio</Link>
              <Link href="/page/2">Inicio - página 2</Link>
              <Link href="/informacion/faq">Preguntas frecuentes</Link>
            </Menu>
            <Button onClick={actions.theme.closeMenu}>Close</Button>
          </>
        ) : (
          <Button onClick={actions.theme.openMenu}>Menu</Button>
        )}
      </Header>
      <hr />
      <Body>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
      </Body>
    </>
  );
};

export default connect(Root);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ isPostType }) =>
    isPostType ? "aliceblue" : "mintcream"};
  h1 {
    font-size: 3em;
    text-align: center;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 16px;
  }
`;

const Body = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 16px;

  img {
    max-width: 100%;
  }
`;

const Button = styled.button`
  margin: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  color: black;
  font-weight: bold;
`;
