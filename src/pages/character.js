import React from "react";
import { useParams } from "react-router";
import { useCharacterById } from "../hooks/useCharacterById";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacterById(id);

  if (loading) return <div> loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <div key={data.character.id}>
        <div>
          <img src={data.character.image} alt={data.character.name} />
        </div>
        <div>{data.character.name}</div>
        <div>{data.character.gender}</div>
        <div>
          {data.character.episode.map((episode) => {
            return (
              <div>
                <div>{episode.name}</div> <div>{episode.episode}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
