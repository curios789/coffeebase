export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(new Date(Date.parse(date)));
};

export const formatTime = (time) => {
    const splitTime = time.split(":");
    const ampm = splitTime[0] >= 12 ? "PM" : "AM"
    const hours = splitTime[0] % 12 || 12;
    return `${hours}:${splitTime[1]} ${ampm}`;
}