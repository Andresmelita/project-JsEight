import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { CategoriesResponse } from '../interfaces/category.interface';

function useCategories() {
  const { data, error, isLoading, mutate } = useSWR<CategoriesResponse>(
    '/publications-types',
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

export { useCategories };
