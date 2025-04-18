import * as React from "react";

interface ButtonGroupProps {
  handleSetId: React.Dispatch<React.SetStateAction<number>>;
}

export default function ButtonGroup({ handleSetId }: ButtonGroupProps) {
  const handlePrevious = () => {
    // Update the parent's id state directly
    handleSetId(prevId => Math.max(1, prevId - 1));
  };

  const handleNext = () => {
    // Update the parent's id state directly
    handleSetId(prevId => prevId + 1);
  };

  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={handlePrevious}
        className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center border border-gray-400"
        aria-label="Previous Pokemon"
      >
        <span className="text-2xl">&larr;</span>
      </button>
      
      <button
        onClick={handleNext}
        className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center border border-gray-400"
        aria-label="Next Pokemon"
      >
        <span className="text-2xl">&rarr;</span>
      </button>
    </div>
  );
}
