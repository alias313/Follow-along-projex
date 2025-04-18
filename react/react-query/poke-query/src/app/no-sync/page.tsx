"use client";
import * as React from "react";
import PokemonCard from "@/components/PokemonCard";
import ButtonGroup from "@/components/ButtonGroup";

export default function App() {
	const [id, setId] = React.useState(1);
	const [pokemon, setPokemon] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true)
	const [error, setError] = React.useState(null);
	
	React.useEffect(() => {
		const handleFetchPokemon = async () => {
			setPokemon(null);
			setIsLoading(true);
			setError(null);
			
			try {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
				
				if (res.ok == false) {
					throw new Error(`Erorr fetching pokemon #${id}`);
				}
				
				const json = await res.json();
				
				setPokemon(json);
				setIsLoading(false);
			} catch (e) {
				setError(e.message);
				setIsLoading(false);
			}
		}
		
		handleFetchPokemon();
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
