import ArtPiecePreview from "@/components/ArtPiecePreview";
import { styled } from "styled-components";

function randomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo }) {
  const spotlightPiece = randomPiece(pieces);
  return (
    <StyledWrapper>
      <ArtPiecePreview
        slug={spotlightPiece.slug}
        image={spotlightPiece.imageSource}
        title={spotlightPiece.name}
        artist={spotlightPiece.artist}
        width={spotlightPiece.dimensions.width}
        height={spotlightPiece.dimensions.height}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: calc(100% - 4rem);
  margin: 0;
  margin-top: 2rem;
  margin-inline: auto;
  padding: 0;
`;
