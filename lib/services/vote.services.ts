import useSWR from 'swr';
import instance from '../helpers/axios.helper';
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

function voteFor(path: string) {
  return instance.post(
    `https://paracuando-team1.academlo.tech/api/v1/publications/${path}/vote`
  );
}

export { useVotes, voteFor };
