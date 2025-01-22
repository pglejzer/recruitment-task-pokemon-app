import { Suspense } from "react";
import { notFound } from "next/navigation";
import PokemonForm from "@/components/PokemonForm/PokemonForm";
import PokemonDetails from "@/components/PokemonDetails/PokemonDetails";
import ErrorPage from "@/components/ErrorPage/ErrorPage";

async function getPokemon(name: string) {
  if (!name || typeof name !== "string") {
    return notFound();
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: { revalidate: 1800 },
    });

    if (response.status === 404) {
      return notFound();
    }

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error && error.name === "FetchError") {
      throw new Error("Network error occurred. Please try again later.");
    }

    if (error instanceof Error && error.message.includes("404")) {
      return notFound();
    }

    throw new Error(
      "An unexpected error occurred. Please try again later or contact with support."
    );
  }
}

export default async function PokemonPage(props: {
  params: Promise<{ pokemonName: string }>;
}) {
  try {
    const params = await props.params;
    const pokemon = await getPokemon(params.pokemonName.toLowerCase());

    return (
      <main>
        <PokemonForm />
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonDetails pokemon={pokemon} />
        </Suspense>
      </main>
    );
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      return notFound();
    }

    return (
      <ErrorPage
        code={500}
        title="Server Error"
        message={
          error instanceof Error ? error.message : "Something went wrong."
        }
      />
    );
  }
}
