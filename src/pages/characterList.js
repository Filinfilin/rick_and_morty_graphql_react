import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div> loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      {data.characters.results.map((char) => {
        return (
          <Link to={`/${char.id}`}>
            <div key={char.id}>
              <div>
                <img src={char.image} alt={char.name} />
              </div>
              <div>{char.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
