import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { TagsResponse } from '../interfaces/tag.interface';

function useTags() {
  const { data, error, isLoading, mutate } = useSWR<TagsResponse>(
    '/tags',
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

export { useTags };
