import ArtPiecePreview from "@/components/ArtPiecePreview";

function randomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo }) {
  const spotlightPiece = randomPiece(pieces);
  return (
    <div>
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
    </div>
  );
}
