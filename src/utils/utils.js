export function formatDate(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);
  
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month as it's zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
  
    // Extract hours and minutes
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Return the formatted date in 'YYYY-MM-DDTHH:mm' format
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}


