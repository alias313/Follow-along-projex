"use client";
import * as React from "react";
import PokemonCard from "@/components/PokemonCard";
import ButtonGroup from "@/components/ButtonGroup";

export default function Home() {
	const [id, setId] = React.useState(1);
	const [pokemon, setPokemon] = React.useState(null);
	
	React.useEffect(() => {
		const handleFetchPokemon = async () => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			const json = await res.json();
			setPokemon(json);
		}
		
		handleFetchPokemon();
	}, [id]);
	
	return (
		<>
		    <PokemonCard 
                isLoading={false}
                data={pokemon} 
                error={null}
            />
		    <ButtonGroup handleSetId={setId} />
		</>
	);
}
