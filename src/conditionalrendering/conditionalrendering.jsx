import React from "react";

export const ConditionalRenderingExample = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="p-4">
      {/* Button to toggle visibility */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isVisible ? "Hide" : "Show"} Content
      </button>

      {/* Conditional rendering using && operator */}
      {isVisible && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          This content is visible when the button is toggled!
        </div>
      )}
    </div>
  );
};

                     
