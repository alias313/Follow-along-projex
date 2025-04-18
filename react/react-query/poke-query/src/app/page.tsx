"use client";
import * as React from "react";
import PokemonCard from "@/components/PokemonCard";
import ButtonGroup from "@/components/ButtonGroup";

export default function Home() {
	const [id, setId] = React.useState(1);
	const [pokemon, setPokemon] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true)
	const [error, setError] = React.useState(null);
	
	React.useEffect(() => {
		let ignore = false;
		
		const handleFetchPokemon = async () => {
			setPokemon(null);
			setIsLoading(true);
			setError(null);
			
			try {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
				console.log(res);
				if (ignore) return;
				
				if (res.ok == false) {
					throw new Error(`Erorr fetching pokemon #${id}`);
				}
				
				const json = await res.json();
				
				setPokemon(json);
				setIsLoading(false);
			} catch (e: Error | any) {
				setError(e.message);
				setIsLoading(false);
			}
		}
		
		handleFetchPokemon();
		
		return () => { ignore = true; };
	}, [id]);
	
	return (
		<>
		 <PokemonCard 
			 isLoading={isLoading}
			 data={pokemon}
			 error={error}
			 />
		 <ButtonGroup handleSetId={setId} />
		</>
	);
}
