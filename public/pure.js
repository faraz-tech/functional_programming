// pure functions - consistent and predictable
function add(x, y) {
    return x + y;
}

function add2(x, y) {
    console.log(x + y);  // Observable side effect
    return x + y;
}

console.log(add(1,2));

console.log(add2(3,4));