// Write a function that accepts an array of 
// strings and console.logs each element using a for loop
function arrStr(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
let arr=["joy","jane","teddy","kait"];
arrStr(arr);
// Write a function that accepts an array of numbers and uses the 
// forEach() method to console.log each number multiplied by 2.

function arryNum(num){
num.forEach(num => {
    newNum=num*2;
    console.log(newNum)
});
}
let num=[5,6,7,8,9]
arryNum(num)

// Write a function that takes in an array of numbers and consoles the first four
//  items multiplied by 8 and the last two added by 5. Console the array with the new values
function arrNumber(arr1){
    for (let i=0;i<arr1.length; i++){
        
        if(i<4){
             arr1[i]*=8  
        }
        else if(i>=arr1.length-2){
            arr1[i]+=5;   
        }
    }
    console.log(arr1)
}
let arr1=[5,6,7,8,9,11,13,14]
arrNumber(arr1)
// Write a function that takes in the following array and use a 
// while loop to iterate and break when the item is equal 
// to the fourth index
// 
function number(arrNum){
    let i=0;
while( i<arrNum.length){
    console.log("option1",arrNum[i]);
    if(i===3){
        break;
    }
    i++
}
}
let arrNum = [1,2,3,4,5,6,7,8,9];
number(arrNum)

// Write a function that takes in a an array of strings and use
//  a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function stringArr(fruits){
    for(let i=0; i<fruits.length;i++){
        if(i===2){
            continue
        }
        console.log(fruits[i]);
    }

}
let fruits= ['apple','plum','banana','strawberries','kiwi']
stringArr(fruits)