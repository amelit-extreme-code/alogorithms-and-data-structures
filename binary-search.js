const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

let count = 0;
let firstElement = 0;
let lastElement = arr.length;
let middleElement;
let found = false;
let position = -1;

const binarySearch = (array, value) => {
    while (found === false && firstElement <= lastElement) {
        count += 1
        middleElement = Math.floor((firstElement + lastElement) / 2);
        if (array[middleElement] === value) {
            found = true
            position = middleElement
            return position;
        }

        if (value < array[middleElement]) {
            lastElement = middleElement - 1
        } else {
            firstElement = middleElement + 1
        }

    }
    return position;

}

console.log(binarySearch(arr, 23), count);



