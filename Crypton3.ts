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

function circleSort(numbers: number[]): number[]{
    for (let num of numbers){
        
    }
}
