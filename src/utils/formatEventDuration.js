import { formatDistanceStrict } from "date-fns";

export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(new Date(start), new Date(end));
};
