function circleCounter(countNum: number): number{
    var circleCount = 0;
    while (countNum > 0){
        var ostNum = countNum % 10;
        if (ostNum==0 || ostNum==4 || ostNum==6 || ostNum==9){
            circleCount += 1;
        }
        if (ostNum==8){
            circleCount += 2;
        }
        countNum = (countNum - ostNum) / 10;
    }
  return circleCount;
}

function circleBubbleSort(numbers: number[]): number[]{
    for (let inum = 0; inum<numbers.length - 1; inum++){
        for (let nnum = 0; nnum<numbers.length - 1; nnum++){
            var ncopy = numbers[nnum];
            if (circleCounter(numbers[nnum])>circleCounter(numbers[nnum+1])){
                numbers[nnum] = numbers[nnum+1];
                numbers[nnum+1] = ncopy;
            }
        }
    }
    return numbers;
}
let list: number[] = [1, 1468, 52, 68, 4];
console.log(circleBubbleSort(list));
