const apiClient = {
    getDateFact: async ()=>{
        const res = await fetch("http://numbersapi.com/random/date")
        return await res.text()
    },
    getMathFact: async ()=>{
        const res = await fetch("http://numbersapi.com/random/math")
        return await res.text()
    }
}
export default apiClient