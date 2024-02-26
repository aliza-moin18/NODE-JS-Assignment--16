// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner. 
// _ Start with your program from Exercise 15. Add a print statement at the end of your program bigger dinner table.
// _ Add one new guest to the beginning of your Array.
// _ Add one new guest to the middle of your Array.
// _ Use append() to add one new guest to the end of your list. 
// _Print a new set of invitation messages, one for each person in your list.



// 1st task

let guestArr: string[] = ["Aliza", "Bisma", "Tooba", "Sahar"];
let canNotAttend: string = "Bisma"
let newGuest: string = "Malaika"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest
console.log(guestArr);
guestArr.map((item) =>  (
   console.log(`Dear ${item}, I Found A Bigger Dinner Table `)
));


// 2nd task

let guestBegin: string = "Mishal";
guestArr.unshift(guestBegin);
console.log(guestArr);


// 3rd task

let middleGuest: string = "Kanwal";
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest);
console.log(guestArr);


// 4th task

guestArr.push("Zimal")
console.log(guestArr);


// 5th task

guestArr.map((item) => (
    console.log(`Dear ${item}, You Are Cordially Invited to a Dinner`)
));

