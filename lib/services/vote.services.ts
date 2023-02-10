import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { VoteResponse } from '../interfaces/vote.interface';
import { useUser } from './user.services';

function useVotes() {
  const { data: user } = useUser();
  const { data, error, isLoading, mutate } = useSWR<VoteResponse>(
    `/users/${user?.id}/votes`,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

export { useVotes };
