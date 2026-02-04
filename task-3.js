function makeAvg(arr){
    let sum = 0;
    for(const num of arr){
        sum+=num;
    }
    let avg = sum/arr.length;
    console.log('Sum = ',sum);
    console.log('Average = ',avg);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
makeAvg(arr);


