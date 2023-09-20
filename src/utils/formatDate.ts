import { format } from 'date-fns';

const formatDate = ( date: string): string => {
    const formattedDate: string = format(new Date(date), 'dd MMM yyyy');

    return formattedDate;
};

export default formatDate;
