import useSWR from 'swr';
import instance from '../helpers/axios.helper';
import { fetcher } from '../helpers/fetcher';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR('/publications', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(values: {
  idPublicationType: string;
  title: string;
  description: string;
  urlShare: string;
  tags: string;
}) {
  return instance.post(
    'https://paracuando-team1.academlo.tech/api/v1/publications',
    values
  );
}

export { usePublications, createPublication };
