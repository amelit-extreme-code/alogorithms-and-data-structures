const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
let count
let firstElement = 0;
let lastElement = arr.length
let middleElement = Math.floor((firstElement + lastElement) / 2)
let found = false
let position = -1;

//TODO: Deal what's wrong with function

function binarySearch(value) {

    while (found === false && firstElement <= lastElement) {
        count += 1
        if (arr[middleElement] === value) {
            found = true
            position = middleElement
            return position
        }

        if (value < arr[middleElement]) {
            lastElement = middleElement - 1
        } else {
            firstElement = middleElement + 1
        }

    }
    console.log(count)
    return position

}

binarySearch(23);
