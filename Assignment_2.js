// Question 1

// What is the value of clothes[0] and why?
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);            // it will return "undefined" because we emptied the array at line2 as a result there is no element to print and it returns undefined.




// Question 2

// Write a Javascript program to find the sum of all elements of a given array?
const arr=[10,20,30,40,50];             //created an array. 
var total=0;
for(var i=0;i<arr.length;i++)           //for loop to iterate through each element in an array.
{
    total+=arr[i]
}
console.log(total);                     // returns 150