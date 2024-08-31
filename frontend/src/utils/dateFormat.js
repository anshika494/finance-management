import moment from 'moment';

// Format date with a default or custom format
export const dateFormat = (date, format = 'DD/MM/YYYY') => {
    // Validate if the date is valid
    if (!moment(date).isValid()) {
        return 'Invalid date';
    }
    return moment(date).format(format);
}