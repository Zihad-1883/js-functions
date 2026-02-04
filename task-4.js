function binaryCount(binary){
    let count = 0;
    for(let i=0; i<binary.length; i++){
        if(binary[i] === '0'){
            count+=1;
        }
        else{
            count+=0
        }
    }
    console.log(count);
}

binary = '11101000011';
binaryCount(binary);