import React from "react";
import { useParams } from "react-router";
import { useCharacterById } from "../hooks/useCharacterById";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacterById(id);

  if (loading) return <div> loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="container">
      <div
        key={data.character.id}
        class=" max-w-3xl my-20 mx-auto bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-2 gap-4 h-80"
      >
        <div>
          <img src={data.character.image} alt={data.character.name} />
        </div>
        <div>
          <div class="text-slate-800 text-xl text-center font-semibold">
            {data.character.name}
          </div>
          <div class="text-slate-800 text-xl text-center font-semibold">
            {data.character.gender}
          </div>
          <div class="max-h-full ">
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
    </div>
  );
}
