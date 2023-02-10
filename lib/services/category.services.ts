import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { CategoriesResponse } from '../interfaces/category.interface';
import { CategoryidResponse } from '../interfaces/categoryId.interface';

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

function useCategoryID(path: string) {
  const { data, error, isLoading, mutate } = useSWR<CategoryidResponse>(
    `/publications-types/${path}`,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

export { useCategories, useCategoryID };
