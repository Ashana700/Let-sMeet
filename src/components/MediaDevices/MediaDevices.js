import moment from 'moment';

export const formatDate = (timestamp) => {
    return moment(timestamp).format("h:mm A");                         /* return the format in which the current time should be displayed */
};