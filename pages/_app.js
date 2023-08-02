import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

// APP COMPONENT
export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, updateArtPiecesInfo] = useLocalStorageState(
    "art-pieces-info",
    {
      defaultValue:
        data &&
        data.map((piece) => {
          const { slug } = piece;
          return { slug, comments: [], isFavorite: false };
        }),
    }
  );

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
    updateArtPiecesInfo(updatedArtPieceInfo);
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // handle submit from comment form
  function handleSubmit(event, slug) {
    event.preventDefault();
    // get value from textarea
    const commentValue = event.target.commentInput.value;
    // get current date
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    // make new object for the comment key
    const commentObject = { comment: commentValue, date: date };
    // new array to update the state artPiecesInfo
    const updatedArtPieceInfo = artPiecesInfo.map((piece) => {
      if (piece.slug === slug) {
        const updatedPiece = {
          ...piece,
          comments: [commentObject, ...piece.comments],
        };
        return updatedPiece;
      }
      return piece;
    });
    console.log(updatedArtPieceInfo);
    updateArtPiecesInfo(updatedArtPieceInfo);
    event.target.reset();
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleFavorite}
          onSubmit={handleSubmit}
        />
      </Layout>
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
