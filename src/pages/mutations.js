import { gql, useMutation } from "@apollo/client";

const CREATE_CHAR = gql`
mutation CreateChar($name: String!, quantity: Int! {
    
}){
    createChar (record: {
        name: $name
        quantity: $quantity

    }){
        record{
            name
        }
    }
}
`;

import React from "react";

export default function Mutations() {
  const [createChar, { data, loading, error }] = useMutation(CREATE_CHAR, {
    variables: {
      name: "John",
      quantity: "3",
    },
  });
  return <div>mutations</div>;
}
