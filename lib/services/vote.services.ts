import useSWR from 'swr';
import instance from '../helpers/axios.helper';
import { fetcher } from '../helpers/fetcher';
import { VoteResponse } from '../interfaces/vote.interface';
import { useUser } from './user.services';

function useVotes() {
  const { data: user } = useUser();
  const { data, error, isLoading, mutate } = useSWR<VoteResponse>(
    `/users/${user?.id}/votes`,
    fetcher,
    { revalidateOnFocus: true }
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function voteFor(path: string) {
  return instance.post(`/publications/${path}/vote`);
}

export { useVotes, voteFor };
