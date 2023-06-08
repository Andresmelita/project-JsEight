import useSWR from 'swr';
import instance from '../helpers/axios.helper';
import { fetcher } from '../helpers/fetcher';
import { EventResponse } from '../interfaces/event.interface';
import { EventidResponse } from '../interfaces/eventId.interface';
import { useUser } from './user.services';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<EventResponse>(
    '/publications?size=100',
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function usePublicationID(path: string) {
  const { data, error, isLoading, mutate } = useSWR<EventidResponse>(
    `/publications/${path}`,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function useMypublications() {
  const { data: user } = useUser();
  const { data, error, isLoading, mutate } = useSWR<EventResponse>(
    `users/${user?.id}/publications`,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

// function createPublication(values: {
//   idPublicationType: string;
//   title: string;
//   description: string;
//   urlShare: string;
//   tags: string;
// }) {
//   return instance.post('/publications', values);
// }

function createPublication(values: {
  publication_type_id: string;
  title: string;
  description: string;
  reference_link: string;
  tags: string;
  certified: boolean;
  agreeWithPolitics: boolean;
}) {
  return instance.post('/publications', values);
}

export {
  usePublications,
  createPublication,
  useMypublications,
  usePublicationID,
};
