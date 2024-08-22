var mathPoint = 100;
var physicsPoint = 90;
var chemistryPoint = 90;
function average() {
    var points = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        points[_i] = arguments[_i];
    }
    var sumPoint = 0;
    for (var i = 0; i < points.length; i++) {
        sumPoint += points[i];
    }
    return sumPoint / points.length;
}
var averagePoint = average(mathPoint, physicsPoint, chemistryPoint);
if (averagePoint < 70) {
    console.log("C Grade");
}
else if (averagePoint >= 70 && averagePoint <= 90) {
    console.log("B Grade");
}
else if (averagePoint > 90) {
    console.log("A Grade");
}
else {
    console.log("Invalid value");
}
