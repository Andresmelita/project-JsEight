import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR(
    'https://paracuando-team1.academlo.tech/api/v1/publications',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublications };
