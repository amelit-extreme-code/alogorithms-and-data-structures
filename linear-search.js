const arr = [3,1,2,6,7,9,7,11,34,567,77,555,33,223]
//TODO: refactor this function

function linearSearch(value) {
    for (let i = 0; i <= arr.length; i++) {
        let returnedArr = []
        if (arr[i] === value) {
            console.log(arr.indexOf(value))
            returnedArr.push(arr[i])
            console.log(returnedArr)
        }

    }
    // return console.log(returnedArr)
}

linearSearch(11)

// 6.42
