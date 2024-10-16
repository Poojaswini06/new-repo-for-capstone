export const validateGuests = (guests) => {
    if (guests < 1) {
        return 'Guests must be at least 1';
    }
    return undefined;
};

export const validateDate = (date) => {
    if (!date) {
        return 'Date is required';
    }
    return undefined;
};

export const validateTime = (time) => {
    if (!time) {
        return 'Time is required';
    }
    return undefined;
};

export const validateOccasion = (occasion) => {
    if (!occasion) {
        return 'Occasion is required';
    }
    return undefined;
};
