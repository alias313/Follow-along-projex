import * as React from "react";

interface PokemonCardProps {
  isLoading: boolean;
  data: any;
  error: string | null;
}

export default function PokemonCard({ isLoading, data, error }: PokemonCardProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-[320px] h-[460px] bg-gray-900 rounded-lg shadow-lg mx-auto my-10">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-[320px] h-[460px] bg-gray-900 rounded-lg shadow-lg mx-auto my-10">
        <p className="text-red-500 text-xl text-center px-4">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center w-[320px] h-[460px] bg-gray-900 rounded-lg shadow-lg mx-auto my-10">
        <p className="text-white text-xl">No Pokemon selected</p>
      </div>
    );
  }

  return (
    <div className="w-[320px] h-[460px] bg-gray-900 rounded-lg shadow-lg mx-auto my-10 flex flex-col p-4">
      <div className="flex-grow bg-blue-900 rounded-lg flex flex-col justify-center items-center">
        <img 
          src={data.sprites?.other["official-artwork"]?.front_default || data.sprites?.front_default} 
          alt={data.name} 
          className="w-48 h-48 object-contain"
        />
        
        <h2 className="text-white text-2xl uppercase mt-4 tracking-wider font-bold">
          {data.name}
        </h2>
        
        <p className="text-yellow-500 mt-2">
          No. {data.id}
        </p>
      </div>
    </div>
  );
}
