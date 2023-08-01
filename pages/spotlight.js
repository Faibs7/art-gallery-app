import Image from "next/image";

function randomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function Spotlight({ pieces }) {
  const spotlightPiece = randomPiece(pieces);
  return (
    <div>
      <Image
        src={spotlightPiece.imageSource}
        alt={spotlightPiece.name}
        width={spotlightPiece.dimensions.width / 6}
        height={spotlightPiece.dimensions.height / 6}
      />
      <p>Artist: {spotlightPiece.artist}</p>
    </div>
  );
}
