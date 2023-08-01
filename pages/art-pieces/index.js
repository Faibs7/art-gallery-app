import ArtPieces from "@/components/ArtPieces";

export default function Gallery({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
