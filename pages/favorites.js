import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function Favorites({ pieces, artPiecesInfo }) {
  const filteredPieces =
    artPiecesInfo && artPiecesInfo.filter((piece) => piece.isFavorite);
  const favoritePieces =
    pieces &&
    pieces.filter((favoritePiece) => {
      filteredPieces &&
        filteredPieces.map((filteredPiece) => {
          if (filteredPiece.slug === favoritePiece.slug) {
            return filteredPiece;
          }
        });
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
