// for (let index = 0; index < 10; index++) 
// {
//    window.alert(index)
// }

// var myName = prompt(" Please Enter the Name: ")

console.log(myName)
// document.write(myName)
// alert(myName)
myName = "Muhammad Taha";
// yourName = "angela yu";

// alert("Hi my Name is  "+ myName+" I am enjoying your course Miss "+yourName);
// console.log(myName+" "+yourName)

// var tweet = prompt("Enter the tweet: ");
// var count = tweet.length;
// console.log(tweet);
// if (count<50) {
//     alert("you have written "+count+" characters and left with "+(50-count) +" characters");
// }
// else
// {
//         alert("you have written "+ (count-50) + " characters more than the limit");

// }
// var newTweet = tweet.slice(0,50);
// console.log(newTweet);
// alert(newTweet)

// firstLetter = yourName.slice(0,1);
// restofName = yourName.slice(1,yourName.length);
// firstLetter = firstLetter.toUpperCase();
// alert(firstLetter+restofName);

// function convertName() {
//     dogAge = prompt("Enter the dog age: ");
//     humanAge = ((dogAge -2)*4)+21;
//     alert("The owners age is s: "+humanAge);
// }
// convertName();

function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here
   
    var totaldays = 90*365;
    var dotalmonths = 90*12;
    var totalweeks = totaldays/7;
    //totalweeks.floor;
    
    var days = age*365;
    console.log("you have left with: "+(totaldays - days) +"days");
    var months = age*12;
    console.log("you have "+ (dotalmonths-months) +" left");
    var weeks = days/7;
    //weeks.floor;
    console.log("you have left "+(totalweeks-weeks)+" weeks");

}
lifeInWeeks(22);