// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  if(a>b){
    return a;
  }
  else{
    return b;
  }
}
  a=prompt("enter the value")
  b=prompt("enter b value")
  console.log(greatestOfTwoNumbers(a,b));


// Progression #2: The lengthy word


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  var sum=0;
  for(i of numbers){
      sum += i;
  }
  return sum;
}
console.log(netPrice(numbers));

// Progression #4: Calculate the average
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPoint(numbersAvg){
  return add(numbersAvg) / 2
}
console.log(midPoint(numbersAvg));

// Progression 4.1: Array of numbers
const numbersAvg1 = [2, 6, 9, 10, 7, 4, 1, 9];
var sum=0;
for(let i=0;i<numbersAvg1;i++){
    sum=sum+index[i];
}
console.log(sum/numbersAvg1.length)

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  var sum="";
  for(i of wordsArr){
      sum+=i.length;
  }
  return parseInt =sum/wordsArr.length
}
console.log(averageWordLength(wordsArr));

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function removeDuplicate(wordsUnique){
  var unique = [];
  for(i=0; i<wordsUnique.length;i++){
      if(unique.indexOf(wordsUnique[i])=== -1){
          unique.push(wordsUnique[i]);
      }
  }
  return unique;
}

  console.log(removeDuplicate(wordsUnique));

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr,wordsFind){
    if(arr.includes(wordsFind)){
        return true;
    }
    else
    return false;
}
console.log(searchElement(wordsFind));

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementReapeated(wordsCount,matter){
  val=0;
  for(i of wordsCount){
      if(i === matter)val+=1;
  }
  return val
}
console.log(howManyTimesElementReapeated(wordsCount));

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
  val=0;
  for(let i=0;i<matrix.length;i++){
      for(j=0;j<matrix[i].length;j++){
          if(!(j+3 > matrix[i].length-1)){
              let check=matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3];
              if(check > val) val=check;
          }
          if(!(i+3>matrix.length-1)){
              let check =matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];
              if(check>val)val=check;
          }
      }
  }
  return val;
}
console.log(maximumProduct(matrix));
