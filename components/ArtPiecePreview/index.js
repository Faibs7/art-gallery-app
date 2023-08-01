import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import { styled } from "styled-components";
import Link from "next/link";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  width,
  height,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const isFavorite =
    artPiecesInfo &&
    artPiecesInfo.find((piece) => piece.slug === slug).isFavorite;

  return (
    <StyledListItem>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        isFavorite={isFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <StyledImage
          src={image}
          alt={title}
          width={width / 6}
          height={height / 6}
        />
        <p>
          &quot;{title}&quot; by {artist}
        </p>
      </Link>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  position: relative;
  width: 100%;
  height: 500px;
  list-style: none;
  margin-bottom: 2rem;

  & p {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background-color: black;
    color: white;
    margin: 0;
    padding: 1rem;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
