import { styled } from "styled-components";

export default function ColorPalette({ artPiece }) {
  return (
    <StyledList>
      {artPiece.colors.map((color) => (
        <StyledListItem key={color} $color={color}></StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`;

const StyledListItem = styled.li`
  list-style: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ $color = "#ffffff" }) => $color};
`;
