function pageLoad() {
    document.getElementById("myForm").addEventListener("submit", processForm);
}
function processForm(event) {
    event.preventDefault();
    valid = true;
    let name = validate(document.getElementById("name").value);
    let drink = validate(document.getElementById("drink").value);
    let food = validate(document.getElementById("food").value);

    if (valid) {
        console.log("Name: "+name);
        console.log("Drink: "+drink);
        console.log("Food: "+food);
        document.getElementById("name").value = "";
        document.getElementById("drink").value = "";
        document.getElementById("food").value = "";
        alert("Response processed (see dev console)");
    } else {
        alert("A text box is empty");
    }
}
function validate(string) {
    if (string.length === 0) {
        valid = false;
    } else {
        return string;
    }
}
let valid = true;