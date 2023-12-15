console.log("=============================================================================================");

var points = [
    {x:0, y:0},
    {x:12, y:22},
    {x:123, y:42},
]

points.dist = function() {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x-p1.x;
   var b = p2.y-p1.y;
    // return Math.sqrt(a*a + b*b);
    return p1;
}

points.sum = function(a) {
    var k1 = this[a].x;
    var k2 = this[a].y;
    return k1 + k2;
}

var a = points.dist();
var b = points.sum(2);

console.log(a);
console.log("---------");
console.log(points);
console.log("---------");
console.log(b);