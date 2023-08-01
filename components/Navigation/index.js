import Link from "next/link";
import { styled } from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/" />
      <Link href="/art-pieces" />
      <Link href="/favorites" />
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: grey;
`;
