//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase())

//Experiment with other combinations (chains) of string methods.

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language.replace('J', 'Q').slice(0,5));
console.log(language);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

let nonprofit = "LaunchCode";

console.log(nonprofit.charCodeAt(0));
console.log(nonprofit.charCodeAt(1));
console.log(nonprofit.charCodeAt(2));
console.log(nonprofit.charCodeAt(3));
console.log(nonprofit.charCodeAt(4));
console.log(nonprofit.charCodeAt(5));
console.log(nonprofit.charCodeAt(6));
console.log(nonprofit.charCodeAt(7));
console.log(nonprofit.charCodeAt(8));
console.log(nonprofit.charCodeAt(9));

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
               + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
               + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
               + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
               + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters);
console.log("A message\nbroken across lines,\n\tand indented");

console.log("The interrobang character, \u203d, combines ? and !");

//We can also use the backslash, \, to include quotes within a string. This is known as escaping a character.
console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

let name = "Jack";
let currentAge = 9;

console.log("Next year, " + name + " will be " + (currentAge + 1) + "."); // a better way to do this as it is tedious

console.log(`Next Year, ${name} will be ${currentAge + 1}.`)

// Besides allowing us to include data in strings in a cleaner, more readable way, template literals also allow us to easily create multi-line strings without using string concatenation or special characters.
console.log(`
`);
let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);
console.log("\n");

let pluralNoun = "men";
let name1 = "Michael";
let verb = "eat";
let adjective = "small";
let color = "red";

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name1 +" to "+ verb +" with strings.");

console.log(`JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun} — that allows ${name1} to ${verb} with strings.`);
console.log("\n");

console.log('JavaScript'[8]); // = p
console.log("Strings are sequences of characters."[5]); // = g
console.log("Wonderful".length); // = 9 .length doest not count form index 0
console.log("Do spaces count?".length); // = 16 spaces do count.

// The length method returns how many characters are in a string. However, the method will NOT give us the length of a number. If num = 1001, num.length returns undefined rather than 4.

let num1 = 1001;

// Use type conversion to print the length (number of digits) of an integer.
console.log(String(num1).length);
console.log("\n");
//Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45;
num2 = String(num2);
console.log(num2.indexOf("."));
atIndex = num2.indexOf(".");
console.log("----------------------------------");
console.log(num2.length);
console.log("----------------------------------");
let num3 = num2.slice(0, atIndex);
console.log(num3);
let num4 = num2.slice(atIndex+1);
console.log(num4);
let num5 = num3 + num4;
console.log(num5);
console.log(num5.length);
//Modify your code to print out the length of a decimal value EXCLUDING the period.

if (num2.includes(".")){
console.log(String(num2).length-1);
} else {
console.log(String(num2).length);
}

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna);
console.log(dna.toUpperCase().trim());
dna = dna.toUpperCase().trim();
//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

console.log(/* Your code here. */);

//b) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log();

//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

console.log(dna);

dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
console.log(dna);
//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
dna = dna.replace("GCT","AGG");
console.log(dna);
console.log(dna.indexOf("CAT"));

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dna.indexOf("CAT") === -1 ){
  console.log("CAT gene NOT found");
} else {
  console.log("CAT gene found");
}


//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dna.slice(16,19));


//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.length} characters long.`);


//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);
console.log(`${dna.toLowerCase().slice(4,7)}o ${dna.slice(dna.indexOf("CAT"),dna.indexOf("CAT")+3).toLowerCase()}`);

let language3 = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let lang1 = language3.slice(0,1) + language3.slice(language3.indexOf("S"),(language3.indexOf("S")+1));
console.log(lang1);
console.log(language3.slice(0,1)+language3.slice(4,5));


//b) Without using .slice(), use method chaining to accomplish the same thing.
lang2 = language3.replace("ava","").replace("cript","");
console.log(lang2);

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language3} is ${lang1}.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.


/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';

console.log(`${notTitle.replace("t", "T").replace("c","C")}`);
// i feel like this could be done a better way without the hard coding, make sure to ask later.