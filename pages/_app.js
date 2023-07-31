import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
