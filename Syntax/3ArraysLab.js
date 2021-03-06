// Arrays LAB
/*
//1.Even Position Element
function evenPositionElement(input){
    let currentNumber;
    let result = [];
    
    for(let i = 0; i< input.length; i++){
        if(i % 2 == 0){
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));
}

//evenPositionElement(['20','30','40','50','60']);

//2.Last K Number Sequence


function lastKNumber(n,k){
    let array = [1];
    let j, count = 0, sum = 0;

    for(let i = 1; i < n; i++){
        j = i - 1, count = 0, sum = 0;

        while(j >= 0 && count < k){
            sum += array[j];
            j--;
            count++;
        }
        array[i] = sum ;
    }
   
    return array; 
}
//console.log(lastKNumber(8,2));


//3. Sum First Last 

function sumFirstLast(array){
    let first = Number(array.shift());
    let last = Number(array.pop());
    console.log(first + last)
}

sumFirstLast(['20','30','40'])


//4. Negative/ Positive number :

function negativePositive(input){
    let newArr = [];
    while(input.length > 0){
        let current = input.shift();
        if(current<0){
            newArr.unshift(current);
        }else{
            newArr.push(current);
        }
    }
    newArr.forEach(x =>{
        console.log(x);
    })
}

negativePositive([7,-2,8,9]);


//5. Smallest Two Numbers

function solve(input){
    let arr = input;
    let smallest = smallestNumber(input);
    let index = arr.indexOf(smallest);
    arr.splice(index, 1);
    let secondNumber = smallestNumber(input);
    
    function smallestNumber(x){
        let lowerNumber = x[0];
        for(let i = 1 ; i <= x.length ; i++){
            let current = x[i];
            if(current < lowerNumber){
                lowerNumber = current;
            }
        }
        return lowerNumber;
    }
   console.log(smallest + ' ' + secondNumber);
}

solve([30,15,50,5]);

*/
/* 
//Bigger Half

function biggerHalf(nums){
    nums.sort((a,b) => a - b);
    const result = [];

    for(let i = Math.floor(nums.length / 2); i < nums.length; i++){
        result.push(nums[i]);
    }
    return result;
}
// console.log(biggerHalf([4,7,2,5]));
// console.log(biggerHalf([3,19,14,7,2,19,6]));

//Piece of Pie

function pieceOfPie(ples, start, end){
    const startIndex = ples.indexOf(start);
    const endIndex = ples.indexOf(end) + 1; 
    
    return ples.slice(startIndex,endIndex);
}

//Process Odd Positions
function solve(numbers){
   console.log(numbers
        .filter((x,i)=> i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}

//Biggest Element
    function solve(input){
    let newArr = [];

    for(every of input){
        let current = bigger(every);
        newArr.push(current);
    }
    function bigger(x){
        let current = x.shift();
        for(each of x){
            if(current < each){
                current = each;
            }
        }
        return current;
    }
    newArr = bigger(newArr);
    console.log(newArr);
}
//Diagonal Sums
    function solve(numbers){
    matrixLength = numbers.length;
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for(let i =0;i<matrixLength;i++){
        firstDiagonal += numbers[i][i];
        secondDiagonal += numbers[i][matrixLength-i-1];
    }
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

//Equal Neighbors


function solve(input){
    let match = [];

    for(let i = 1; i < input.length; i++){
        let filteredArray = input[i].filter((number, index)=> {
            return input[i - 1].indexOf(number,index) === index;
        })
        match.push(...filteredArray)
        let filteredArrayOne = input[i - 1].filter((element,index) =>{
            return element === input[i - 1][index - 1];
        })
        match.push(...filteredArrayOne);
    }
    let filteredArrayTwo = input[input.length -1].filter((element, index)=>{
        return element === input[input.length - 1][index - 1];
    })
    match.push(...filteredArrayTwo);
    console.log(match.length);
}

function solve(input) {
    let match = 0;
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input[x].length - 1; y++) {
            if(input[x][y] == input[x][y + 1]){
                match++;
            }
        }
    }
    for (let y = 0; y < input[0].length; y++) {
        for (let x = 0; x < input.length - 1; x++) {
            if(input[x][y] == input[x + 1][y]){
                match++;
            }
        }
    }
    console.log(match);
}
solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])
*/



// From The Lecture! 

let a = 5;
const pika = 'Chu';
let myArr = [10,20,30,30];

const [ten, twenty,...rest] = myArr;/// New Arr with first elements from old Arr;
/// 3x dot give you all the resst of the arr;

let first = myArr[0];
myArr[0] = 15;

function evenPositionElement(input){
    let result = [];
    for(let i = 0; i< input.length; i+= 2){
        result.push(input[i]);
    }
    //console.log(result.join(' '));
}
 //     first index of splice - 'select the index which u want to work'
 //     second index - 'How manny elements u want to delete 
 //     anything after is adding elements! 
myArr.splice(1,2,'element',2,34);
myArr[10]= 0;
let part = myArr.slice(-3); // last 3 elements ;
// first index is what u want to fill it with
// second index is where to start
// third index is where to stop
myArr.fill(3,3,10);

myArr.sort(); // alphabetic
myArr.sort((a,b) => a - b);// lower-Higher 
/*
function compare(a,b){
    if(a > b){
        return 1; 
    }else if( b > a){
        return -1;
    }else{
        return 0;
    }
}
*/
let pokemons = ['pickachu','boubasour','Charmander'];
pokemons.sort();// Charmander, boubasour, pickachu;
pokemons.sort((a,b) => a.localeCompare(b))// boubasour, Charmander, pickachu;

const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];
const oneToNine = num1.concat(num2,num3);
// 1,2,3,4,5,6,7,8,9

let arr = [10,20,30,40,50];

//arr.forEach((value, index, arr) => console.log(value,index,arr));
/* 
    10 0 (5) [10, 20, 30, 40, 50]
    20 1 (5) [10, 20, 30, 40, 50]
    30 2 (5) [10, 20, 30, 40, 50]...
*/

let nums = arr.map(Number);

let isEven = function(element){
    return element % 2 === 0;
}
//console.log(nums.some(isEven));
// true
//console.log(nums.some(x => x > 30));
// true
// Some check if there is qny true will return true;
//console.log(nums.every(x => x > 8));
// true
// with every u need to have all of them true ;

//console.log(nums.find(x => x>32));
// 40
//find will give you the first True!;
//For index u can use findIndex;
//console.log(nums.findIndex(x => x>32));
/// 3

pokemons.push('chalizard');
function filterNames(pokemon, query){
    return pokemon.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })
}
// console.log(filterNames(pokemons, 'Cha'));
// ['Charmander','chalizard']
// 10, 20, 30, 40, 50
let newArr = arr.reduce(reducer, 0);


function reducer(accumolator,value){
    return accumolator + value;
}

//console.log(newArr);
// 150 
/// short Version!!!! WHATCH

const result = arr.reduce((a,v) => a + v, 0);
//console.log(result)
// 150

// Sum and find the average ; 

let sum = [0,1,2,3].reduce(function(acc,curr){
    return acc + curr;
},0);
// console.log(sum);  / 6
const average = 
    arr.reduce((total,number,index,array) =>{
        total += number;
        if(index === array.length - 1){
            return total/array.length;
        }else{ return total;}
    })
    // console.log(average); 30