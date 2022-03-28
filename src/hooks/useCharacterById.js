import { useQuery, gql } from "@apollo/client";

const GETCHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacterById = (id) => {
  const { data, error, loading } = useQuery(GETCHARACTER, {
    variables: { id },
  });
  return {
    data,
    error,
    loading,
  };
};
