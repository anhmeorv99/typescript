var say_hello = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
function caculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function display(id, username, role) {
    if (role === void 0) { role = "admin"; }
    console.log("ID: ", id);
    console.log("Username: ", username);
    console.log("Role: ", role);
}
console.log(say_hello("Anh NT"));
