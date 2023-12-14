var primes = [2, 3, 5, 7];

var book = {
    topic: "JavaScript",
    fat: true
};

var points = [
    {x:0, y:0},
    {x:1, y:1},
]

book.topic = "novo";
book.author = "Isaak";
book.contents = {};

console.log("O autor é: " + book["author"]);
console.log(book["topic"]);
console.log(primes[0]);
console.log("O length do 'primes' é: " + primes.length);
console.log(points[0]);