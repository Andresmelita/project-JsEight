import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { UserIdResponse } from '../interfaces/userId.interface';
import { useUser } from './user.services';

function useIdUser() {
  const { data: user } = useUser();
  const { data, error, isLoading, mutate } = useSWR<UserIdResponse>(
    `/users/${user?.id}`,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export { useIdUser };
