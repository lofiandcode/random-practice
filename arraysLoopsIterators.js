/*
- iterate over the string
- if currentChar === char, push indexOf to array
- after loop, check length of array
- if length > 2 or < 2, return 0
- else return length between two indexes
*/

const subString = (str, char) => {
    const result =[];

    for(let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === char.toLowerCase()) {
            result.push(i);
        };
    }
    if(result.length < 2 || result.length > 2) return 0;
    else return result[1] - result[0] + 1;
}

const testStr = 'HellO World!';

console.log(subString(testStr, 'o'));