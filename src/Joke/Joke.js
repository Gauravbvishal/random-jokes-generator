import React, { useState } from "react";

function Joke() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  function generateJoke() {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(`${data.setup} - ${data.punchline}`);
        setLoading(false);
      })
      .catch(() => {
        setJoke("Oops! Something went wrong. Please try again.");
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-gray-900 flex flex-col items-center justify-center text-white p-5">
      <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400 animate-bounce">
        Joke Generator
      </h1>
      <button
        type="button"
        className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mb-6"
        onClick={generateJoke}
      >
        {loading ? "Loading..." : "Click to Generate a Joke"}
      </button>
      <p
        className={`text-xl md:text-2xl lg:text-3xl text-center mt-4 ${
          joke && "animate-fade-in"
        }`}
      >
        {joke}
      </p>
    </div>
  );
}

export default Joke;
