/* 
Variables and data types
*/

/*
var firstName = 'Robert';
var lastName = 'Walker';
var age= 28;
var fullAge = true;
var job;

job = 'Teacher';
console.log(firstName, lastName,age,fullAge,job);
*/



/*
Variable Mutaions and type coercion
*/
/*
// Type Coercion
var firstName = 'Robert';
var age = 38;

console.log(firstName +' ' + age);

var job,isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName +' is a '+ age +' year old ' + job +'. Is he single? ' + isMarried );


// Variable mutaion
age = 'Thirty Eight';
job = 'Developer';
console.log(age);

alert(firstName +' is a '+ age +' year old' + job +'. Is he single? ' + isMarried );



var lastName =prompt('What is his last name?');
console.log(firstName,lastName);*/


/******************* 
Basic 
Operators
********************/

/*
// Math Operators
var age = 38
var currentTime = new Date();
var now = currentTime.getFullYear();
var yearBirth = now - age;
console.log(yearBirth);
console.log(now + 2);
console.log(now / 2);
console.log(now * 2);


// Logical Operator

var ageJohn, ageMark;
ageJohn = 28;
ageMark = 40;

var johnOlder = ageJohn > ageMark;
var markOlder = ageJohn < ageMark;
console.log(johnOlder);
console.log(markOlder);


//typeof
console.log(typeof johnOlder);
console.log(typeof now);
console.log(typeof currentTime);
console.log(typeof 'My Name Is Rob');

*/

/*************************
 * Operator Precedence 
 * 

 //multiple operators
var age = 38;
var currentTime = new Date();
var now = currentTime.getFullYear();
var yearRob = now - age;
var fullage = 18;

var isFullage = now - yearRob >= fullage;

console.log(isFullage);

// grouping
var ageRob = now -yearRob;
var ageJames = 42;
var averageAge = (ageJames + ageRob) /2
console.log(averageAge);


//multiple assignments
var x,y;
x = y = (3+5) *4 - 6; //8*4-6 //32 -6 // 26
console.log(x,y);


//more operators

//x = x *2;
x*=2;
console.log(x,y);
x +=10;
console.log(x,y);
x ++;
console.log(x,y);
*/


/****************** 
 * Coding Challenge 1
*/

/*
var personOneName = prompt("What is the First Persons Name?")
var personOneHeight = prompt("What is " + personOneName +'s Height in meters')
var personOneKG = prompt("What is " + personOneName +'s Weight in KG')
var PersonOneBMI = personOneKG / (personOneHeight * personOneHeight)

var personTwoName = prompt("What is the Second Persons Name?")
var personTwoHeight = prompt("What is " + personTwoName +'s Height in meters')
var personTwoKG = prompt("What is " + personTwoName +'s Weight in KG')
var PersonTwoBMI = personTwoKG / (personTwoHeight * personTwoHeight)

var highestBMi = Math.max(PersonOneBMI,PersonTwoBMI)

if (highestBMi = PersonOneBMI)
{   
    alert(personOneName +' has a higher BMI ('+ PersonOneBMI +') than ' + personTwoName +"'s BMI("+ PersonTwoBMI +')');
}
else
{   
    alert(personTwoName +' has a higher BMI ('+ PersonTwoBMI +') than ' + personOneName +"'s BMI("+ PersonOneBMI +')');
}*/


// Truthy and falsy values & equality operators

// Falsy values:undefined, null,0,'' Nan
// Truth values: All NOT falsy values
/*
var height;
height = 23;
if (height){
    console.log('Variable is defined');
    }
    else{
        console.log("variable is not definded");
    }



    // Equality Variable

    if (height == '23')
    {
        console.log("The == operator does type coercion!");
    }

    if (height === '23')
    {
        console.log("The === operator does type coercion!");
    }
    else
    {
        console.log("The === operator does NOT DO type coercion!");
    }*/




    // code Challenge 2

 var teamOneScore = new Array();
 var teamTwoScore =  new Array();
 
 var teamOneAvg;
 var teamTwoAvg;
 
 teamOneScore[0]= parseInt(prompt("Enter John's teams 1st match score."));
 teamOneScore[1] =parseInt(prompt("Enter John's teams 2nd match score."));
 teamOneScore[2] = parseInt(prompt("Enter John's teams 3rd match score."));

 teamTwoScore[0]= parseInt(prompt("Enter Mark's teams 1st match score."));
 teamTwoScore[1] =parseInt(prompt("Enter Mark's teams 2nd match score."));
 teamTwoScore[2] = parseInt(prompt("Enter Mark's teams 3rd match score."));


  teamOneAvg = teamOneScore.reduce((a,b) => a + b,0) / teamOneScore.length;  
  teamTwoAvg = teamTwoScore.reduce((a,b) => a + b,0) / teamTwoScore.length;

  
  switch(true)
{
    case teamOneAvg > teamTwoAvg:
    alert("John's Team average of " + teamOneAvg + " is higher than Mark's Teams average of " + teamTwoAvg)
    break;

    case teamOneAvg < teamTwoAvg:
    alert("John's Team average of " + teamOneAvg + " is lower than Mark's Teams average of " + teamTwoAvg)
    break;

    default:
    alert("Both teams have the same average score of "  + teamOneAvg);
   

   
}
