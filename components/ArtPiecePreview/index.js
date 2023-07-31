import Image from "next/image";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  width,
  height,
}) {
  return (
    <li>
      <Image src={image} alt={title} width={width} height={height} />
      <p>
        `&quot;{title}&quot; by {artist}`
      </p>
    </li>
  );
}
