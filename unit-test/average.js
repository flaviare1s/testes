const getAverage = (n1, n2, n3) => {
    if(n1 && n2 && n3) {
        return (n1 + n2 + n3) / 3
    } else {
        if(n1 && n2) {
            return (n1 + n2) /2
        } else if(n1) {
            return n1
        }
    }
    return null
}

module.exports = {
    getAverage
}