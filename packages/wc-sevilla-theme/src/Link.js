import React from "react";
import { connect, styled } from "frontity";

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
          actions.theme.closeMenu();
        }}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);

const Anchor = styled.a`
  color: steelblue;
`;
