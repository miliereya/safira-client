export const convertArray = (arr, quantity) => {
    return arr.reduce((cols, key, index) => {
        return (index % quantity === 0 ? cols.push([key]) : cols[cols.length - 1].push(key)) && cols
    }, [])
}

//old function on js