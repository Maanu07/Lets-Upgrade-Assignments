// Question 1

console.log(1 + "2" + "2");                          //122 (using "+" operator with strings results in concatenation.)

console.log(1 + +"2" + "2");                          //32 (+ is also a unary operator which is used to convert string to a number.)

console.log(1 + -"1" + "2");                          //02 ( because 1+(-1) gives 0 and then 0 is concatenated with 2 to give "02")

console.log(+"1" + "1" + "2");                         //112( "+" converts 2 to a number value and then we concatenate them all to give "112")

console.log( "A" - "B" + "2");                         //NaN2 (because  "A" - "B" can't be evaluated and returns NaN which gets concated with "2" to gove NaN2)

console.log( "A" - "B" + 2);                            //NaN (because concatenation of NaN and a number value gives NaN)





//Question 2

// You are given a variable “marks”. Your task is to print:
// - AA if the mark is greater than 90
// - AB if the mark is greater than 80 and less than or equal to 90
// - BB if the mark is greater than 70and less than or equal to 80
// - BC if the mark is greater than 60 and less than or equal to 70
// - CC if the mark is greater than 50 and less than or equal to 60
// - CD if the mark is greater than 40 and less than or equal to 50
// - DD if the mark is greater than 30 and less than or equal to 40
// - FF if the mark is less than or equal to 30

var marks=65;
if(marks>90)
 console.log("AA");
else if(marks>80 && marks<=90)
 console.log("AB");
else if(marks>70 && marks<=80)
 console.log("BB");
else if (marks>60 && marks<=70)
 console.log("BC");
else if (marks>50 && marks<=60)
console.log("CC");
else if (marks>40 && marks<=50) 
 console.log("CD");
else if (marks>30 && marks<=40)
 console.log("DD");
else if(marks<=30)
 console.log("FF");
