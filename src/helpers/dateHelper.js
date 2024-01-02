export function formatDatetimeToDate(datetime) { 
    const date = new Date(datetime);
    const isoString = date.toISOString();
    
    const day = isoString.slice(8, 10);
    const month = isoString.slice(5, 7);
    const year = isoString.slice(0, 4);
    
    return `${day}/${month}/${year}`;
}