import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';

function useUser() {
  const { data, error, isLoading, mutate } = useSWR(
    'https://paracuando-team1.academlo.tech/api/v1/users/user-info',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useUser };
