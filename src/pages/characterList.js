import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div> loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="container grid grid-cols-4 gap-4">
      {data.characters.results.map((char) => {
        return (
          <div
            key={char.id}
            class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-screen-sm m-1 hover:scale-110 translate-y-6 ease-in-out duration-300"
          >
            <Link to={`/${char.id}`}>
              <div>
                <img src={char.image} alt={char.name} />
              </div>
              <div className=" text-blue-450">{char.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
