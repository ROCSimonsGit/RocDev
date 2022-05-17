function generateRandomNumbers (numberOfDifferentImages, times) {
    const returnArray = [];
    for (let j = 0; j < times; j++) {
        for(let i = 1; i <= numberOfDifferentImages; i++){
            returnArray.push(i);
        }
    }
    return returnArray;
}
export {generateRandomNumbers};


