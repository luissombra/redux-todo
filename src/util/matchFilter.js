export default matchFilter = (filter) => {
    return (todo) => {
        result = true
        Object.keys(filter).forEach(key => {
            if (todo[key] !== filter[key])
                result = false
        })
        return result
    }
}