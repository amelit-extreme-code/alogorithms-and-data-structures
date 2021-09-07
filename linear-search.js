const arr = [3, 1, 2, 6, 7, 9, 7, 11, 34, 567, 77, 555, 33, 223]
let count = 0;

function linearSearch(value) {
    for (let i = 0; i <= arr.length; i++) {
        count += 1
        if (arr[i] === value) {
            console.log(count, "this is the counter of iteration times")
            console.log(arr.indexOf(value), "this is the index of the element which was forwarded to function as an argument")
            return console.log(value, "that is the value which was founded by the cycle")
        }

    }
    return console.log("Your value is not found inside of array")
}

linearSearch(11)
