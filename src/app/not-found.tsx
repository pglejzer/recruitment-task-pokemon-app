import ErrorPage from "@/components/ErrorPage/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code={404}
      title="Pokemon Not Found"
      message="The Pokemon you're looking for doesn't exist or couldn't be found."
    />
  );
}

