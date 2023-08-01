import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";

// APP COMPONENT
export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    const initalArtPiecesInfo =
      data &&
      data.map((piece) => {
        const { slug } = piece;
        return { slug, isFavorite: false };
      });

    setArtPiecesInfo(initalArtPiecesInfo);
  }, [data]);

  function handleFavorite(slug) {
    const updatedArtPieceInfo = artPiecesInfo.map((piece) => {
      if (piece.slug === slug) {
        const updatedPiece = {
          ...piece,
          isFavorite: !piece.isFavorite,
        };
        return updatedPiece;
      }
      return piece;
    });
    setArtPiecesInfo(updatedArtPieceInfo);
  }
  console.log(artPiecesInfo);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleFavorite}
      />
    </>
  );
}

// fetcher
const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
