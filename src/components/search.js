import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getLocations, { loading, data, error, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    { variables: { name } }
  );
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <div>
          {data.characters.results.map((char) => {
            return <div key={char.location.name}>{char.location.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}
