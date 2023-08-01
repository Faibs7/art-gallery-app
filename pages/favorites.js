import ArtPiecePreview from "@/components/ArtPiecePreview";

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
    <ul>
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
    </ul>
  );
}
