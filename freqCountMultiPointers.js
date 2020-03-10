// helper function that takes in a string and returns the frequency of letters in object counter
function createFrequency(string){
    let frequencyCount = {};
    for(let letter of string){
        let letterCount = frequencyCount[letter] || 0;
        frequencyCount[letter] = letterCount + 1;
    }
    return frequencyCount;
}

// takes in two strings, message and letters
// returns true if the letters can be used to recreate the message and false otherwise
function constructNote(message, letters){
    let messageFreq = createFrequency(message);
    let lettersFreq = createFrequency(letters);
    for(let key in messageFreq){
        if(messageFreq[key] !== lettersFreq[key]){
            return false;
        }
    }
    return true;
} // don't have to run the freqCounter for message, we just need to compare letter of message in count of letters, decrement lettterFreq value, if less than 0 then we don't have enough letter and we lose


// takes in an array of numbers and a target average
// returns true if there is a pair of values in the array whose average equals the target
// returns false if there is no such pair
function averagePair(nums, targetAvg) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let average = (nums[left]+nums[right])/2;

        if (average === targetAvg) {
            return true;
        } else if (average < targetAvg) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

// takes two arrays (keys and values)
// returns a new object with keys paired with values

function twoArrayObject(keys, values){
    let zippedObj = {};
    for(let i = 0; i < keys.length; i++){
        if(!values[i]){
            zippedObj[keys[i]] = null;
        } else {
            zippedObj[keys[i]] = values[i];
        }
    }
    return zippedObj;
}

// helper function that takes in a string and returns the frequency of letters in object counter
function createFrequency(arr){
    let frequencyCount = {};
    for(let num of arr){
        let count = frequencyCount[num] || 0;
        frequencyCount[num] = count + 1;
    }
    return frequencyCount;
}

// takes in two numbers and compares the digits
// if the two numbers contain the same frequency of digits, it returns true; otherwise false
function sameFrequency(num1, num2) {
    let num1Arr = num1.toString().split('');
    let num2Arr = num2.toString().split('');

    if (num1Arr.length !== num2Arr.length) return false;

    let num1Freq = createFrequency(num1Arr);
    let num2Freq = createFrequency(num2Arr);

    for (let key in num1Freq) {
        if (num1Freq[key] !== num2Freq[key]) {
            return false;
        } 
    }
    return true;
}

// similar to above, we can decrement and only use one frequency counter


// separatePositive attempt 1 that introduced an infinite loop

// function separatePositive(nums) {
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i]<0) {
//             nums.push(nums.splice(i,1)[0]);
//             i--;
//         }
//     }
//     return nums;
// }

// separatePositive
function separatePositive(nums) {
    let temp = 0;
    let left = 0;
    let right = nums.length-1;

    while (left < right) {
        if (nums[left]<0) {
            if (nums[right]>0) {
                temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
            } else {
                right--;
            }
        } else {
            left++;
        }
    }
    return nums;
}

separatePositive([2, -1, -3, 6, -8, 10]);