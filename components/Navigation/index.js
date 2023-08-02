import Link from "next/link";
import { styled } from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Gallery</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 99;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  border: 1px solid black;
  background: grey;
  padding: 2rem 0;
  flex-grow: 1;
  text-align: center;
`;
