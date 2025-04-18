"use client";
import * as React from "react";
import PokemonCard from "@/components/PokemonCard";
import ButtonGroup from "@/components/ButtonGroup";

export default function Home() {
	const [id, setId] = React.useState(1);
	const [pokemon, setPokemon] = React.useState(null);
	const forceSkipRef = React.useRef(0);
	
    React.useEffect(() => {
		const handleFetchPokemon = async () => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (forceSkipRef.current % 5 == 0) {
                console.log("Waiting for 0.5 seconds");
                await new Promise(resolve => setTimeout(resolve, 500));
            }
			const json = await res.json();
            console.log(`Set id ${id}`);
			setPokemon(json);
		}
		handleFetchPokemon();
        forceSkipRef.current++;
	}, [id]);
	
	return (
		<>
            <p className="text-center text-2xl font-bold mb-4">
                Try clicking twice before a multiple of 5.
            </p>
		    <PokemonCard 
                isLoading={false}
                data={pokemon} 
                error={null}
            />
		    <ButtonGroup handleSetId={setId} />
		</>
	);
}
