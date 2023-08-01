import { styled } from "styled-components";
import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <StyledList>
      {pieces &&
        pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            slug={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  width: calc(100% - 4rem);
  margin: 0;
  margin-top: 2rem;
  margin-inline: auto;
  padding: 0;
  padding-bottom: 6rem;
`;
