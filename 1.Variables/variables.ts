var a:number = 10;
console.log(a);

var s1:string = "String 1"
var s2:string = "String 2"
console.log(s1);
console.log(s2);

var b1:boolean = true
var b2:boolean = false
console.log(b1);
console.log(b2);

var a1:any = {
  id: 1,
  name: "anhnt",
  address: "HN"
}

console.log(a1);

var array1:Array<string> = ["Mercedes", "Toyota", "KIA"]
console.log(array1);
console.log(array1[1]);
console.log(array1.length);


var array2:Array<string | number | boolean> = [12, "Hello", true];
console.log(array2);
