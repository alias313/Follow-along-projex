"use client";
import * as React from "react";
import PokemonCard from "@/components/PokemonCard";
import ButtonGroup from "@/components/ButtonGroup";
import { QueryProvider, useQuery } from "@/components/useQuery";

function PokemonFetcher() {
  const [id, setId] = React.useState(1);
  const { data, isLoading, error } = useQuery(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
  return (
    <>
      <PokemonCard 
        isLoading={isLoading}
        data={data} 
        error={error}
      />
      <ButtonGroup handleSetId={setId} />
    </>
  );
}

export default function Home() {
  return (
    <QueryProvider>
      <PokemonFetcher />
    </QueryProvider>
  );
}
