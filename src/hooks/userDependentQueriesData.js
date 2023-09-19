import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const useDependentQueriesData = ({ email }) => {
  const { data: user } = useQuery(['user', email], () =>
    fetchUserByEmail(email),
  );
  const channelId = user?.data?.channelId;

  return useQuery(
    ['courses', channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    },
  );
};
