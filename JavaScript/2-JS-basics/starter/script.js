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



/**************************
 If/ Else Ststements
 
 var firstName = 'John';
 var civilStatus = 'Single';

 if (civilStatus === 'Married')
 {
    console.log(firstName + ' is married');
 }
 else
 {
console.log(firstName + ' is not married');
 }

 var isMarried = true

 if (isMarried)
 {
    console.log(firstName + ' is married');
 }
 else
 {
console.log(firstName + ' is not married');
 }*/


 /**************************
  Boolean Logic
  */
/*
  var firstName = 'John';
  var age = 20

  if (age <13)
  {
      console.log(firstName + ' is a boy');      
  }
  else if(age >= 13 && age < 20)
  {
    console.log(firstName + ' is a teenage');
  } 
  else if(age >=20 && age <30)
  {
    console.log(firstName + ' is a young man');
  }
  else
  {
      console.log(firstName + ' is a man');
  }*/



  /********************************** 
   * The Ternary Operator and switch statements
  */

  var firstName = 'John';
  var age = 21;

  //Ternary
  age >= 18 ? console.log(firstName + ' drinks beers')
  :console.log(firstName + ' drinks juice');

  var drink = age >= 18 ? 'Beer' : 'Juice';

  console.log(firstName + ' drinks ' + drink );


  var job ='Instructor';
  //Switch
  switch(job)
  {
      case 'Teacher':
      case 'Instructor':
      console.log(firstName + ' teaches kids how to code.');
      break;

      case 'driver':
      console.log(firstName + ' drive a uber in Berlin.');
      break;

      case 'diver':
      console.log(firstName + ' dives in Thailand.');
      break;

      default:
      console.log(firstname + 'has an undefinded job');

  }

  switch(true)
  {
        case age <13 :
        console.log(firstName + ' is a boy');
        break;

        case age >=13 && age < 20:
        console.log(firstName + ' is a teenager'); 
        break;

        case age >= 20 && age <30:
        console.log(firstName + ' is a young man');  
        break;

        default:
        console.log(firstName + ' is a man'); 
  }