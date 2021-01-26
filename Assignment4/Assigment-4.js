// Question 1
// By how many ways we can access elements in the DOM and write about them in brief?

/*We can access DOM elements in several ways:
1: document.getElementById("element_id")                returns the targeted element
2: document.getElementsByCLass("element_class")         returns array of elements with same class 
3: document.querySelector()                             select the first element which match
4: document.getElemetsByTagName()                       selects element on the basis of tag name
5: document.querySelecorAll()                           select all the matched element
*/



//Question2

function sum(){
    var num1=Number(document.getElementById("num1").value);    //value attribute returns string and we convert it into a number using Number() method.
    var num2=Number(document.getElementById("num2").value);
    // console.log(typeof num1,num1);
    var sum=num1+num2;
    document.getElementById("sum").value=sum;
}
