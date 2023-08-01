import ArtPiecePreview from "@/components/ArtPiecePreview";
import { styled } from "styled-components";

export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  // filter pieces for isFavorite
  const favoritePieces = pieces.filter((piece) => {
    // Find the corresponding art piece info in artPiecesInfo array
    const artPieceInfo = artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug
    );

    // Return true only if the art piece info exists and isFavorite is true
    return artPieceInfo && artPieceInfo.isFavorite === true;
  });

  return (
    <StyledList>
      {favoritePieces.map((piece) => (
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
