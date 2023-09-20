import { formatDistanceToNow } from 'date-fns';

const getMoment = (date: string): string => {
    const dateToMilliseconds = new Date(date).getTime();

    const timeAgo = formatDistanceToNow(dateToMilliseconds)
    return timeAgo;
}

export default getMoment;