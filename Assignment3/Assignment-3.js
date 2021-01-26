// Answer 1
// NOte: i make a change in the first two output because i felt like swapping author and title name makes the sentence valid.

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
for(var i=0;i<library.length;i++)
{
    if(library[i].readingStatus)
    {
        console.log(`Already read '${library[i].title}' by ${library[i].author}.`);
    }else{
        console.log(`You should read '${library[i].title}' by ${library[i].author}.`);

    }
}





// Answer 2
// Note: i have given a dummy age as 17

var age=17;
if(age<18){
    alert("Not legal age to drive");
}else{
    alert("Drive safe")
}