import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <ArtPieces pieces={data} />;
}
