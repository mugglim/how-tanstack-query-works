import axios from "axios";
import useQuery from "../../tanstack-query-lite/react/useQuery";

const usePostListQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryHash: JSON.stringify(["posts"]),
    queryFn: async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");

      return data.slice(0, 5);
    },
    staleTime: 3_000,
    gcTime: 5_000,
  });
};

export default usePostListQuery;