function pageLoad() {
    document.getElementById("myForm").addEventListener("submit", processForm);
}
function processForm(event) {
    event.preventDefault();
    valid = true;
    let name = validate(document.getElementById("name").value);
    let drink = validate(document.getElementById("drink").value);
    let food = validate(document.getElementById("food").value);
    let location = document.getElementById("eat-in").value;

    if (valid) {
        console.log("Name: "+name+", drink: "+drink+", food: "+food+", location: "+location);
        document.getElementById("name").value = "";
        document.getElementById("drink").value = "";
        document.getElementById("food").value = "";
        document.getElementById("eat-in").value = "";
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