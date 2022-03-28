import { useQuery, gql } from "@apollo/client";

const GETCHARACTERS = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { data, error, loading } = useQuery(GETCHARACTERS);
  return {
    error,
    data,
    loading,
  };
};
