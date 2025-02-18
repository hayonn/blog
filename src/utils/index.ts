const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const dateFormat = (date:string | Date) => {
    if(typeof date == "object") return "Feb 7, 2025"
    let day = date.split(" ")[0]
    day = day.split("-") 
    
    return `${month[Number(day[1]) - 1]} ${day[2]}, ${day[0]}`
}