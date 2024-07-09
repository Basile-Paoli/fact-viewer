export default function formatDate(date: Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    const hour = date.getUTCHours().toString().padStart(2, "0")
    const minute = date.getUTCMinutes().toString().padStart(2, "0")
    return `${month}-${day}:${hour}:${minute}`
}
