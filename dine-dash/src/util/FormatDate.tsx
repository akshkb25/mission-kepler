export const formatDate = (str: string) => {
    const date = new Date(str);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", {month: "short"});
    const year = date.getFullYear();

    const suffix = 
    day === 1 || day === 21 || day === 31 ? "st" :
    day === 2 || day === 22 ? "nd" :
    day === 3 || day === 23 ? "rd" : "th";

    return `${day}${suffix} ${month}, ${year}`;
}

export const getTimeOfDay = (str: string) => {
    const [hour, _minute] = str.split(":").map(Number);
  
    if (hour >= 5 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 16) return "Noon";
    if (hour >= 16 && hour < 21) return "Evening";
    return "Night";
};