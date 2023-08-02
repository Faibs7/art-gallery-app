import Link from "next/link";
import { useRouter } from "next/router";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import { styled } from "styled-components";
import CommentForm from "@/components/CommentForm";
import Comment from "@/components/Comment";

export default function ArtPieceDetails({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onSubmit,
}) {
  const router = useRouter();

  // get the current image
  const artPiece = pieces.find(({ slug }) => slug === router.query.slug);

  // get favorite status for the current immage
  const isFavorite =
    artPiecesInfo &&
    artPiecesInfo.find((piece) => piece.slug === router.query.slug).isFavorite;

  // get comments for the current image
  const comments =
    artPiecesInfo &&
    artPiecesInfo.find((piece) => piece.slug === router.query.slug).comments;

  if (!pieces) {
    return null;
  }

  return (
    <StyledWrapper>
      <Link href="/art-pieces">All Art Pieces</Link>
      <StyledList>
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
      </StyledList>
      <p>year: {artPiece.year}</p>
      <p>genre: {artPiece.genre}</p>
      {/*
      rend comments only when exist ->
      */}
      {comments && <Comment comments={comments} />}
      <CommentForm onSubmit={onSubmit} slug={artPiece.slug} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  width: calc(100% - 4rem);
  margin: 0;
  margin-top: 2rem;
  margin-inline: auto;
  padding: 0;
  padding-bottom: 10rem;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 2rem;
`;
