// It can be mutuated (changed)  - Inconsistent
let salutation = "hello";
salutation = "Hi";

// using cons, immutable
const salutation2 = "hello";  // can't update



const person = {
    firstName: 'Faraz'
}
// person = {}  Not correct
person.lastName = "Khan";
console.log(person); // { firstName: 'Faraz', lastName: 'Khan' }



// TO protect above case, object freeze, not mutable
const person2 = Object.freeze({
    firstName: "Faaiz"
})
person2.lastName = "Khan";
console.log(person2); // { firstName: 'Faaiz' }

const indexes = Object.freeze([0,1,2,3,4,5]);
function addElement(arr) {
    return Object.freeze([ ...arr, arr.length]);
}
console.log(addElement(addElement(indexes)))