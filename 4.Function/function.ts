const say_hello = function(name: string):string {
  return "Hello " + name;
}

function add(num1: number, num2: number):number {
  return num1 + num2;
}

function caculator(): any {
  function subtract(num1: number, num2: number):number {
    return num1 - num2;
  }
  return subtract;
}

function display(id: number, username: string, role: string = "admin") {
  console.log("ID: ", id);
  console.log("Username: ", username);
  console.log("Role: ", role);
}

console.log(say_hello("Anh NT"));

