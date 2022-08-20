function fibonacci(num) {
    if(num == 0) return [0]
    else if (num == 1) return [0,1] 
    else {
        array = [0,1]
        for (let i = 0; i < num-2; i++) {
        array.push((array[array.length - 2]) + (array[array.length - 1]))
        }
        return array
    }
}

const fibsRec = (num, array) => {
    if (array == 0) array = [0, 1] 
    if (num == 1) return array
    else if(num == 0) return [0]
    else {
        array.push((array[array.length - 2]) + (array[array.length - 1]))
        return fibsRec(num - 1, array)
    }
}
