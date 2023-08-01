import Link from "next/link";
import { useRouter } from "next/router";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieceDetails({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();

  const artPiece = pieces.find(({ slug }) => slug === router.query.slug);

  const isFavorite =
    artPiecesInfo &&
    artPiecesInfo.find((piece) => piece.slug === router.query.slug).isFavorite;

  if (!pieces) {
    return null;
  }

  return (
    <>
      <Link href="/">All Art Pieces</Link>
      <ArtPiecePreview
        key={artPiece.slug}
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        width={artPiece.dimensions.width}
        height={artPiece.dimensions.height}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        slug={router.query.slug}
        isFavorite={isFavorite}
      />
      <p>year: {artPiece.year}</p>
      <p>genre: {artPiece.genre}</p>
    </>
  );
}
