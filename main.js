// Array exercises
// 1. Use the following array to join all of the words together.
var arraySentence = ["I'm", "now", "a", "pro", "at", "arrays", "!"];
arraySentence.join();

// Use the following array for questions 2-4:
var tvShows = ["Portlandia", "Curb Your Enthusiasm", "Dr. Quinn, Medicine Woman"];

// 2. Change the second element to "Full House"
tvShows[1] = 'Full House';

// 3. Add a new TV show to the beginning of the array.
tvShows.unshift('Seinfeld');

// 4. Create a new Array called showTV. The items should be the same as tvShows, only in reverse order
var showTV = [];
showTV = tvShows.reverse();

// 5. Create an object called "myPartner" that describes you with your partnery's name, favorite color, and pet's name.
var myPartner = {type:"Human", name:"Colin", favoriteColor:"Blue", petName:"Scout", job:"Slack-ass"};
// 6. Create an object called dogs. Assign a key of "favoriteBreeds" with the value being an array of three dog breeds.
var dog = {
  favoriteBreeds:["Pitbull", "Australian Sheperd", "Corgi"]
};
// 7. Get the length of the 3rd dog name.
console.log(dog.favoriteBreeds[2].length);

// 8. To the dogs object, add a key of "sweetNames" with a value that is an array of dog names.
dog.sweetNames = ["your mom", "coors", "bad dog"];



// Looping Exercises
// 9. Using a loop, log to the console numbers 23 to 99, only in increments of 3.

// 10. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//     number is even and greater than 10, and 'Odd' if the number is odd.
var numArray = [2, 19, 7, 34, 6];

// 11. Write a loop that outputs the following to the console:
var hash = '';
var loops = 0;
while (loops < 7) {
	loops++;
	hash = hash + '#';
	console.log(hash);
}

// *
// **
// ***
// ****
// *****
// ******
// *******

// 12. Write a loop that asks a user to input a sentence and returns whether the total number of characters
//     (not counting white spaces) is even or odd.
var sentence = prompt('Please input a sentence.');
for (i = 0; i < sentence.length; i++) {
	counter = 0;

}



// Bonus
// Prompt a user to enter a phone number. Write a function that reverses the number.
var phoneNumber = prompt('Enter your phone number');
var newPhoneNumber = phoneNumber.reverse();
console.log(newPhoneNumber);
