"use client";
import * as React from "react";
import PokemonCard from "@/components/PokemonCard";
import ButtonGroup from "@/components/ButtonGroup";

export default function Home() {
	const [id, setId] = React.useState(1);
	const [pokemon, setPokemon] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true)
	const [error, setError] = React.useState(null);
  const forceSkipRef = React.useRef(0);
	
	React.useEffect(() => {
		let ignore = false;
		
		const handleFetchPokemon = async () => {
			setPokemon(null);
			setIsLoading(true);
			setError(null);
			
			try {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (forceSkipRef.current % 5 == 0) {
          console.log("Waiting for 0.5 seconds");
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        if (ignore) {
          console.log(`Ignored ${id}`);
          return;
        }
				if (res.ok == false) {
					throw new Error(`Erorr fetching pokemon #${id}`);
				}
				
				const json = await res.json();
        console.log(`Set id  ${id}`);
				
				setPokemon(json);
				setIsLoading(false);
			} catch (e: Error | any) {
				setError(e.message);
				setIsLoading(false);
			}
		}
		
		handleFetchPokemon();
    forceSkipRef.current++;

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
